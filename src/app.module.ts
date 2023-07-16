import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

// デコレーター クラスを装飾する関数
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://stopod990:yuRm6FZ2Hx3Y2W4t@cluster0.a9yzbxr.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// ↓こういうことを内部的に処理しているらしい
// new AppModule();
// const AppService = new AppService();
// new AppController(AppService);

/**
 * modules...外部とのやり取りに責務を持つ
 * controllers...ルーティングに責務を持つ
 * services...処理に責務を持つ
 */
