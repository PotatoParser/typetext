Object.defineProperty(Element.prototype, 'typetext', {
	async value(text, opts = {}) {
		if (this.tagName === 'SCRIPT') return;

		opts = Object.assign({
			delay: 50,
			whitespace: true,
			before: char => char,
			after: () => 0
		}, opts);

		const sleep = ms => new Promise(r => setTimeout(r, ms));

		if (typeof arguments[0] !== 'string') {
			opts = text;
			text = this.innerHTML;
			this.innerHTML = '';
			return await this.typetext(text, opts);
		}

		if (arguments.length === 2 && typeof text !== 'string') throw new Error('Text must be a string');

		const div = document.createElement('div');
		div.innerHTML = text;
		this.innerHTML = '';

		for (const i of [...div.childNodes]) {
			if (i instanceof Element) {
				this.appendChild(i);
				await i.typetext(opts);
			} else {
				const t = i.textContent;
				i.textContent = '';
				this.appendChild(i);
				for (let k of t) {
					if (!opts.whitespace && /\s/.test(k)) {
						i.textContent += k;
						continue;
					}

					k = await opts.before(k, i, t, opts);

					if (opts.delay) await sleep(opts.delay);

					i.textContent += k;

					await opts.after(k, i, t, opts);
				}
			}
		}
		return true;
	}
});
