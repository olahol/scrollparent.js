# scrollparent.js

> A function to get the scrolling parent of an html element.

## Install

```bash
npm install scrollparent --save
```

## Example

```js
var Scrollparent = require("scrollparent");

Scrollparent(document.getElementById("content")) // document.body
```

```js
var Scrollparent = require("scrollparent");

Scrollparent(document.getElementById("inside-a-scrolling-div")) // HTMLDivElement
```

## Contributors

* Ola Holmström (@olahol)
* Bart Nagel (@tremby)
* Daniel White (@danbrianwhite)

## License

MIT
