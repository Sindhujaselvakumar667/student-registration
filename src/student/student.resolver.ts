import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entities';
import { CreateStudentInput } from './dto/create-student.input';

@Resolver(() => StudentEntity)
export class StudentsResolver {
  constructor(private readonly studentService: StudentService) {}
  @Query(() => [StudentEntity], { name: 'allstudents' })
  findAll() {
    return this.studentService.findAll();
  }
  @Mutation(() => StudentEntity)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.create(createStudentInput);
  }
  @Query(() => StudentEntity, { name: 'student' })
  findOne(@Args('roll_no', { type: () => Int }) roll_no: number) {
    return this.studentService.findOne(roll_no);
  }
  @Mutation(() => String, { name: 'removestudent' })
  removeStudent(@Args('roll_no', { type: () => Int }) roll_no: number) {
    return this.studentService.deleteStudent(roll_no);
  }
}
