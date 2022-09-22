import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalStrategy } from '../auth/local.strategy';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthModule } from '../auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    PassportModule,
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
  ],
  providers: [UsersService, LocalStrategy, JwtStrategy],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
