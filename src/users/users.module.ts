import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shcemas/user.shcema';

@Module({
  // modelをインジェクトする
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // providersのものしかかけない
  // ほかのmoduleでも使う場合はexportsすることでDIを自動でやってくれるらしい
})
export class UsersModule {}
