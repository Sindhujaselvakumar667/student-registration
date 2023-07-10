import { DataSource } from 'typeorm';
import { StudentEntity } from '../student/student.entities';
import { getRepositoryToken } from '@nestjs/typeorm';

export const StudentProvider = [
  {
    //Custom providers
    //useValue - injecting a constant value
    provide: getRepositoryToken(StudentEntity),
    //indicating that this provider will be used for injecting the StudentEntity throughout the module.
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(StudentEntity),
    // factory function that takes dependencies as parameters and returns an instance of the desired object
    inject: ['DATA_SOURCE'],
  },
];
