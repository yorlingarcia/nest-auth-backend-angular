import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
