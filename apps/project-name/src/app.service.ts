import { Injectable } from '@nestjs/common';
// import { appConfig } from 'config';

@Injectable()
export class AppService {
  getHello(): string {
    // console.log(appConfig.mongo);

    return 'Hello World!';
  }
}
