import { Module } from '@nestjs/common';
import { RedisConnectModule } from './redis.module';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';
import { AcademyLookup } from './lookup.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  //Once the entity is registered using forFeature, you can inject the corresponding repository into your services or controllers and perform CRUD (Create, Read, Update, Delete) operations on the AcademyLookup entity using the TypeORM repository methods.
  imports: [TypeOrmModule.forFeature([AcademyLookup]), RedisConnectModule],
  providers: [LookupController, LookupService],
  controllers: [LookupController],
  exports: [LookupController],
})
export class LookupModule {}
