import { Injectable } from '@nestjs/common';

// どんな値を返すかの処理を担う
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
