async function typeText(target, text, opts = {}) {
	opts = Object.assign({
		delay: 50
	}, opts);

	const sleep = ms => new Promise(r => setTimeout(r, ms));

	if (!(target instanceof Element)) throw new Error('Target must be element');

	if (typeof arguments[1] !== 'string') {
		const temp = target.innerHTML;
		target.innerHTML = '';
		return await typeText(target, temp, opts);
	}

	if (arguments.length === 3 && typeof text !== 'string') throw new Error('Text must be a string');

	const div = document.createElement('div');
	div.innerHTML = text;
	target.innerHTML = '';

	for (const i of Array.from(div.childNodes)) {
		if (i instanceof Element) {
			target.appendChild(i);
			await typeText(i, i.innerHTML, opts);
		} else {
			const t = i.textContent;
			i.textContent = '';
			target.appendChild(i);
			for (let k of t) {
				if (typeof opts.beforetype === 'function') k = await opts.beforetype(k, i, t, opts);

				if (opts.delay) await sleep(opts.delay);

				i.textContent += k;

				if (typeof opts.aftertype === 'function') await opts.aftertype(k, i, t, opts);
			}
		}
	}
}
