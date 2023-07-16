import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// どんなURLがきたらどんな値を返すかを管理する
@Controller()
export class AppController {
  // 普段ならこう書くよねの例
  // @Get() // getメソッドを使う
  // getHell() {
  //   const appService = new AppService();
  //   return appService.getHello();
  // }

  // serviceに@Injextableをつける, modulesのprovidersにserviceを入れた上で、
  // constructorに指定を入れると自動でこのクラスをインスタンス化したときにthisで使えるようにしてくれる？
  constructor(private readonly appService: AppService) {}
  // ↑こういうことをDependency Injection(DI): 依存性の注入というらしい

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * 1, このControllerはExportしてるのでどこかでnew AppController()をしているはず
   * 2, new AppController(new AppService())みたいなことをしている
   * 3, 1-2をNest.jsがやってくれているのでこの書き方
   */
}
