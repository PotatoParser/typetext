# typetext
> Easy, lightweight, and conservative text typing!

<p align="center">
  <img src="https://user-images.githubusercontent.com/45542237/163290719-f95725cf-d150-4956-96f6-e9297cc5fb79.gif">
</p>

## Installation

Simply head to the releases, download, and import the scripts with

```html
<script src="typetext.js">
```

## Usage

```javascript

// Element.prototype.typetext(text[, options])

document.body.typetext('Hello <b>World!</b>'); // Types the text in body

document.body.typetext(); // Retypes text in body

document.body.typetext('<a href="#">Typing</a> is <i>Fun!</i>', { delay: 100 }); // Use options
```

## Methods

### `Element.prototype.typetext(text[, opts])`
- `text` \<string> String to type or options if no text
- `opts` \<Object> Options
	- `delay` \<number> Milliseconds for delay. A delay of 0 removes delays. **Default:** 50
	- `whitespace` \<boolean> Types out whitespaces. **Default:** `true`
	- `before` \<Function> | \<AsyncFunction> Called before a character is typed
		- `character` \<char> Character to type
		- `element` \<Element> Element to type on
		- `text` \<string> Full text to type
		- `opts` \<Object> Passed in options
		- Return: \<string> New string to type
	- `after` \<Function> | \<AsyncFunction> Called after a character is typed
		- `character` \<char> Character typed
		- `element` \<Element> Element typed on
		- `text` \<string> Full text to type
		- `opts` \<Object> Passed in options
- Returns: \<Promise> Fulfills with `true` upon success.

#### Options Example
```javascript
document.body.typetext({
	delay: 100,
	before(char, ele, str, opt) {
		return char + ' ';
	},
	after(char, ele, str, opt) {
		console.log(char);
	}
});
```