# scrollparent.js

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

## Contributors

* Ola Holmström (@olahol)
* Bart Nagel (@tremby)

## License

MIT
