const { resolve } = require('path');
const { test, expect } = require('@playwright/test');

test('test scrollparent behaviour', async ({ page }) => {
  const testFile = resolve(__dirname, 'test.html');

  await page.goto(`file://${testFile}`);

  await expect(page).toHaveTitle('scrollparent.js test page');

  await page.evaluate(() => {
    var top = document.scrollingElement || document.documentElement;

    let counter = 0;
    function equal(a, b) {
      counter += 1;
      if (a !== b) {
        throw new Error("Failed #" + counter);
      }
    }

    function byId(id) {
      return document.getElementById(id);
    }

    equal(Scrollparent(byId("test1")), byId("test1-target"));

    equal(Scrollparent(byId("test2")), top);
    equal(Scrollparent(byId("test3")), top);

    equal(Scrollparent(byId("test4")), byId("test4-target"));
    equal(Scrollparent(byId("test5")), byId("test5-target"));
    equal(Scrollparent(byId("test6")), byId("test6-target"));
    equal(Scrollparent(byId("test7")), byId("test7-target"));

    equal(Scrollparent(byId("test8")), top);
    equal(Scrollparent(byId("test9")), top);

    equal(Scrollparent(byId("test10")), byId("test10-target"));

    equal(typeof Scrollparent("test1"), typeof undefined);
  });
});

test('benchmark scrollparent', async ({ page }) => {
  const benchFile = resolve(__dirname, 'bench.html');

  await page.goto(`file://${benchFile}`);

  await expect(page).toHaveTitle('scrollparent.js benchmark page');

  page.on("console", (msg) => {
    console.log(msg);
  });

  await page.evaluate(() => {
    function byId(id) {
      return document.getElementById(id);
    }

    function bench(name, n, fn) {
      const start = performance.now();
      for (let i = 0; i < n; i++) {
        fn(i)
      }
      console.log(`${name} took ${performance.now() - start}ms`);
    }

    const node1 = byId("bench1");
    bench("bench1", 1000, () => {
      Scrollparent(node1);
    });

    const node2 = byId("bench2");
    bench("bench2", 1000, () => {
      Scrollparent(node2);
    });

    const nodes1 = [];
    for (let i = 0; i < 1000; i++) {
      const root = document.createElement("div");
      document.body.appendChild(root);
      root.style.overflow = i % 2 === 0 ? "scroll" : "hidden";

      let current = root;
      for (let j = 0; j < i; j++) {
        const child = document.createElement("div");
        current.appendChild(child);
        current = child
      }

      nodes1.push(current);
    }

    // force style recompute
    getComputedStyle(nodes1[nodes1.length - 1], null).getPropertyValue("overflow");

    bench("benchN1", nodes1.length, (i) => {
      Scrollparent(nodes1[i]);
    });

    const nodes2 = [];
    for (let i = 0; i < 1000; i++) {
      const root = document.createElement("div");
      document.body.appendChild(root);

      let current = root;
      for (let j = 0; j < i; j++) {
        const child = document.createElement("div");
        if (j === Math.floor(i / 2)) {
          child.style.overflow = "scroll";
        }

        current.appendChild(child);
        current = child
      }

      nodes2.push(current);
    }

    getComputedStyle(nodes2[nodes2.length - 1], null).getPropertyValue("overflow");

    bench("benchN2", nodes2.length, (i) => {
      Scrollparent(nodes2[i]);
    });
  });
});