# scrollparent.js

[![NPM version][npm-image]][npm-url]
[![Size][size-image]][size-url]
[![Download count][downloads-image]][downloads-url]

> A function to get the scrolling parent of an html element.

## Install

```bash
npm install scrollparent --save
```

## Example

```js
var Scrollparent = require("scrollparent");

Scrollparent(document.getElementById("content")) // HTMLHtmlElement or HTMLBodyElement as appropriate
```

```js
var Scrollparent = require("scrollparent");

Scrollparent(document.getElementById("inside-a-scrolling-div")) // HTMLDivElement
```

## Note about the root scrolling element

Internally, the root scrolling element is determined in this library
as the result of

```js
document.scrollingElement || document.documentElement;
```

This should give a usable result in most browsers today
but if you want to ensure full support
you should use a `document.scrollingElement` polyfill such as
[this one](https://github.com/mathiasbynens/document.scrollingElement).

## Contributors

* Ola Holmström (@olahol)
* Bart Nagel (@tremby)
* Daniel White (@danbrianwhite)

## License

MIT

[npm-image]: https://img.shields.io/npm/v/scrollparent.svg?style=flat-square
[npm-url]: https://npmjs.org/package/scrollparent
[downloads-image]: http://img.shields.io/npm/dm/scrollparent.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/scrollparent
[size-image]: https://badge-size.herokuapp.com/olahol/scrollparent.js/master/scrollparent.js?style=flat-square
[size-url]: https://github.com/olahol/scrollparent.js/blob/master/react-tagsinput.js