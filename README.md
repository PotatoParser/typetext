# typetext
> Easy, lightweight, and conservative text typing!

<p align="center">
  <img src="https://user-images.githubusercontent.com/45542237/104257630-bf544100-5432-11eb-9e16-f51da848a4a3.gif">
</p>

## Installation

Simply head to the releases, download, and import the scripts with

```html
<script src="typetext.js">
```

## Usage

```javascript

// typeText(<Element>, <String>, <Options>);

typeText(document.body, 'Hello <b>World!</b>'); // Types the text in body

typeText(document.body); // Retypes text in body

typeText(document.body, '<a href="#">Typing</a> is <i>Fun!</i>', {
	delay: 100,
}); // Use options
```

### Options
- `delay` \<Number> (Default: 50): milliseconds for delay; a delay of 0 removes delays
- `beforetype` \<Function(\<Character>, \<Element>, \<Full String>, \<Options>)>: called before a character is typed; must return the character to be typed
- `aftertype` \<Function(\<Character>, \<Element>, \<Full String>, \<Options>)>: called after a character is typed

#### Options Example
```javascript
typeText(document.body, {
	delay: 100,
	beforetype(char, ele, str, opt) {
		return char + ' ';
	},
	aftertype(char, ele, str, opt) {
		console.log(char);
	}
})
```