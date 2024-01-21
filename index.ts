import webdriver, { By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

const chromeOptions = new chrome.Options().addArguments(
  "--mute-audio",
  "--autoplay-policy=no-user-gesture-required"
);

const driver = new webdriver.Builder()
  .forBrowser("chrome")
  .setChromeOptions(chromeOptions)
  .build();

const testUrl = "https://www.youtube.com/watch?v=aqz-KE-bpKQ";
await driver.get(testUrl);

await driver.wait(until.elementLocated(By.css("#player .html5-video-player")));

await driver.executeScript(`
    let observer;
    function createObserver() {
        return new Promise(function(resolve) {
            observer = new MutationObserver(function() {
                const panel = document.querySelector('.html5-video-info-panel');
                if (!panel) return;
                observer.disconnect();
                resolve(panel);
            });
            observer.observe(document, { childList: true, subtree: true });
        });
    }
    (async function() {
        await createObserver();
    })();
  `);

await driver.quit();
