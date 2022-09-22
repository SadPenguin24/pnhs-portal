import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

//modules
import { AuthModule } from './auth/auth.module';
import { SectionModule } from './section/section.module';
import { SubjectModule } from './subjects/subject.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URI,
      }),
    }),
    AuthModule,
    UsersModule,
    SectionModule,
    SubjectModule,
  ],
})
export class AppModule {}
