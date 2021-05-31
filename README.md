# nestjs-test-bug-minimize-reproduction

## Why cause this bug?

I guess the file named `config.ts` in root dir. If remove this file, test will running successfully.

## How to reproduction?

```
yarn
yarn test
```


```
 FAIL  apps/project-name/src/modules/test/test.controller.spec.ts
  ● TestController › should be defined

    TypeError: application_config_1.ApplicationConfig is not a constructor

       6 |
       7 |   beforeEach(async () => {
    >  8 |     const module: TestingModule = await Test.createTestingModule({
         |                                              ^
       9 |       controllers: [TestController],
      10 |     }).compile();
      11 |

      at new TestingModuleBuilder (node_modules/@nestjs/testing/testing-module.builder.js:13:34)
      at Function.createTestingModule (node_modules/@nestjs/testing/test.js:8:16)
      at Object.<anonymous> (apps/project-name/src/modules/test/test.controller.spec.ts:8:46)

  ● TestController › should be defined

    expect(received).toBeDefined()

    Received: undefined

      14 |
      15 |   it('should be defined', () => {
    > 16 |     expect(controller).toBeDefined();
         |                        ^
      17 |   });
      18 | });
      19 |

      at Object.<anonymous> (apps/project-name/src/modules/test/test.controller.spec.ts:16:24)

 FAIL  apps/test/src/test.controller.spec.ts
  ● TestController › root › should return "Hello World!"

    TypeError: application_config_1.ApplicationConfig is not a constructor

       7 |
       8 |   beforeEach(async () => {
    >  9 |     const app: TestingModule = await Test.createTestingModule({
         |                                           ^
      10 |       controllers: [TestController],
      11 |       providers: [TestService],
      12 |     }).compile();

      at new TestingModuleBuilder (node_modules/@nestjs/testing/testing-module.builder.js:13:34)
      at Function.createTestingModule (node_modules/@nestjs/testing/test.js:8:16)
      at Object.<anonymous> (apps/test/src/test.controller.spec.ts:9:43)

  ● TestController › root › should return "Hello World!"

    TypeError: Cannot read property 'getHello' of undefined

      17 |   describe('root', () => {
      18 |     it('should return "Hello World!"', () => {
    > 19 |       expect(testController.getHello()).toBe('Hello World!');
         |                             ^
      20 |     });
      21 |   });
      22 | });

      at Object.<anonymous> (apps/test/src/test.controller.spec.ts:19:29)

 FAIL  apps/project-name/src/app.controller.spec.ts
  ● AppController › root › should return "Hello World!"

    TypeError: application_config_1.ApplicationConfig is not a constructor

       7 |
       8 |   beforeEach(async () => {
    >  9 |     const app: TestingModule = await Test.createTestingModule({
         |                                           ^
      10 |       controllers: [AppController],
      11 |       providers: [AppService],
      12 |     }).compile();

      at new TestingModuleBuilder (node_modules/@nestjs/testing/testing-module.builder.js:13:34)
      at Function.createTestingModule (node_modules/@nestjs/testing/test.js:8:16)
      at Object.<anonymous> (apps/project-name/src/app.controller.spec.ts:9:43)

  ● AppController › root › should return "Hello World!"

    TypeError: Cannot read property 'getHello' of undefined

      17 |   describe('root', () => {
      18 |     it('should return "Hello World!"', () => {
    > 19 |       expect(appController.getHello()).toBe('Hello World!');
         |                            ^
      20 |     });
      21 |   });
      22 | });

      at Object.<anonymous> (apps/project-name/src/app.controller.spec.ts:19:28)

Test Suites: 3 failed, 3 total
Tests:       3 failed, 3 total
Snapshots:   0 total
Time:        3.686s
Ran all test suites related to changed files.
```