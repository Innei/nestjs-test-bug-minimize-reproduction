import { Controller, Get } from '@nestjs/common';
// import { appConfig } from 'config';

@Controller('test')
export class TestController {
  @Get()
  async test() {
    // console.log(appConfig);

    return 'OK';
  }
}
