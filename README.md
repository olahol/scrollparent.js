# scrollparent.js

> A function to get the scrolling parent of an html element.

[![browser support](https://ci.testling.com/olahol/scrollparent.js.png)
](https://ci.testling.com/olahol/scrollparent.js)

## Install

```bash
npm install scrollparent --save
```

## Example

```js
Scrollparent(document.getElementById("content")) // document.body
```

```js
Scrollparent(document.getElementById("inside-a-scrolling-div")) // HTMLDivElement
```

## License

MIT
