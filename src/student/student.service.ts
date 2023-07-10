import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entities';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}
  async create(createUserInput: CreateStudentInput): Promise<StudentEntity> {
    const user = this.studentRepository.create(createUserInput);
    return await this.studentRepository.save(user);
  }
  async findAll(): Promise<Array<StudentEntity>> {
    return await this.studentRepository.find();
  }
  async findOne(roll_no): Promise<StudentEntity> {
    return await this.studentRepository.findOneById(roll_no);
  }
  async updateStudent(roll_no, requestBody): Promise<any> {
    const student = await this.studentRepository.update(
      { roll_no },
      requestBody,
    );
    return student;
  }
  async deleteStudent(roll_no): Promise<any> {
    const student = await this.findOne(roll_no);
    await this.studentRepository.remove(student);
    return 'student removed';
  }
}
