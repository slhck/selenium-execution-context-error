# Selenium Error with Execution Context

Reproed with Chrome 120.0.6099.234 and ChromeDriver 120.0.6099.109.

```
➜ npm install
➜ npm run test

> selenium-execution-context-error@1.0.0 test
> npx tsx index.ts

/Users/werner/Desktop/selenium-execution-context-error/node_modules/selenium-webdriver/lib/error.js:524
    let err = new ctor(data.message)
              ^

WebDriverError: no such execution context
  (Session info: chrome=120.0.6099.234)
    at Object.throwDecodedError (/Users/werner/Desktop/selenium-execution-context-error/node_modules/selenium-webdriver/lib/error.js:524:15)
    at parseHttpResponse (/Users/werner/Desktop/selenium-execution-context-error/node_modules/selenium-webdriver/lib/http.js:601:13)
    at Executor.execute (/Users/werner/Desktop/selenium-execution-context-error/node_modules/selenium-webdriver/lib/http.js:529:28)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async thenableWebDriverProxy.execute (/Users/werner/Desktop/selenium-execution-context-error/node_modules/selenium-webdriver/lib/webdriver.js:745:17)
    at <anonymous> (/Users/werner/Desktop/selenium-execution-context-error/index.ts:15:1) {
  remoteStacktrace: '0   chromedriver                        0x0000000100d644dc chromedriver + 4162780\n' +
    '1   chromedriver                        0x0000000100d5c664 chromedriver + 4130404\n' +
    '2   chromedriver                        0x00000001009b39f8 chromedriver + 293368\n' +
    '3   chromedriver                        0x000000010099c65c chromedriver + 198236\n' +
    '4   chromedriver                        0x0000000100999e84 chromedriver + 188036\n' +
    '5   chromedriver                        0x000000010099ab30 chromedriver + 191280\n' +
    '6   chromedriver                        0x00000001009aa74c chromedriver + 255820\n' +
    '7   chromedriver                        0x00000001009bf4b4 chromedriver + 341172\n' +
    '8   chromedriver                        0x000000010099b1e0 chromedriver + 192992\n' +
    '9   chromedriver                        0x00000001009bf19c chromedriver + 340380\n' +
    '10  chromedriver                        0x0000000100a39bd8 chromedriver + 842712\n' +
    '11  chromedriver                        0x00000001009ed6bc chromedriver + 530108\n' +
    '12  chromedriver                        0x00000001009ee930 chromedriver + 534832\n' +
    '13  chromedriver                        0x0000000100d29e08 chromedriver + 3923464\n' +
    '14  chromedriver                        0x0000000100d2e3dc chromedriver + 3941340\n' +
    '15  chromedriver                        0x0000000100d12038 chromedriver + 3825720\n' +
    '16  chromedriver                        0x0000000100d2ef3c chromedriver + 3944252\n' +
    '17  chromedriver                        0x0000000100d046f4 chromedriver + 3770100\n' +
    '18  chromedriver                        0x0000000100d4b980 chromedriver + 4061568\n' +
    '19  chromedriver                        0x0000000100d4baf8 chromedriver + 4061944\n' +
    '20  chromedriver                        0x0000000100d5c2e4 chromedriver + 4129508\n' +
    '21  libsystem_pthread.dylib             0x0000000194053fa8 _pthread_start + 148\n' +
    '22  libsystem_pthread.dylib             0x000000019404eda0 thread_start + 8\n'
}

Node.js v18.19.0
```
