import { Module } from '@nestjs/common';
import { RedisConnectModule } from './redis.module';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';
@Module({
  imports: [RedisConnectModule],
  providers: [LookupController, LookupService],
  controllers: [LookupController],
  exports: [LookupController],
})
export class LookupModule {}
