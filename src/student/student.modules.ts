// import { DatabaseModule } from 'src/common/database.module';
// import { StudentProvider } from './student.provider';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';
import { StudentEntity } from './student.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsResolver } from './student.resolver';
import { DateScalar } from './date.scalar';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentService, StudentController, StudentsResolver, DateScalar],
  //create a custom instance instead of having Nest instantiate
  controllers: [StudentController],
  exports: [StudentController],
})
export class StudentModule {}
