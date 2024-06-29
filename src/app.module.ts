import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [UsersModule, TokensModule],
})
export class AppModule {}
