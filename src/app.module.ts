import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { User, UserSchema } from './user/user.schema';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
