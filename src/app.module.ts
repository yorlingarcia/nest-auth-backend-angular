import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const db = process.env.MONGO_URI;

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(db, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
