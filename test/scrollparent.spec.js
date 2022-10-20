const { resolve } = require('path');
const { test, expect } = require('@playwright/test');

test('test scrollparent behaviour', async ({ page }) => {
  const testFile = resolve(__dirname, 'test.html');

  await page.goto(`file://${testFile}`);

  await expect(page).toHaveTitle('scrollparent.js test page');

  await page.evaluate(() => {
    var top = document.scrollingElement || document.documentElement;

    function equal(a, b, msg) {
      if (a !== b) {
        throw new Error(msg || "Page Error");
      }
    }

    function byId(id) {
      return document.getElementById(id);
    }

    equal(Scrollparent(byId("test1")).className, "scroll");

    equal(Scrollparent(byId("test2")), top);
    equal(Scrollparent(byId("test3")), top);

    equal(Scrollparent(byId("test4")).className, "scroll-y");
    equal(Scrollparent(byId("test5")).className, "scroll-x");
  });
});
