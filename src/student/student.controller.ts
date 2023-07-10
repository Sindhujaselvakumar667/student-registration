import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { StudentService } from './student.service';
import { CreateStudentInput } from './dto/create-student.input';
@Controller('/student')
@ApiTags('student-controller')
export class StudentController {
  //The constructor injection is a dependency injection pattern used in NestJS to provide dependencies to a class.
  //Constructor injection promotes loose coupling between classes, improves testability, and allows for easy swapping of dependencies.
  constructor(private readonly studentService: StudentService) {}
  @Post()
  @ApiBody({
    type: CreateStudentInput,
    schema: {
      example: {
        roll_no: 10,
        phone_number: '9361906162',
        first_name: 'John',
        last_name: 'Doe',
        dob: '2002-02-13',
        email_id: 'johndoe@example.com',
        gender: 'Male',
        country_code: 101,
        programme: 'Bachelors',
        course: 'BCA',
        specification: 'CA',
      },
    },
  })
  @ApiCreatedResponse({ description: 'Student is Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async register(@Body() CreateStudentInput): Promise<any> {
    return await this.studentService.create(CreateStudentInput);
  }
  @Get()
  @ApiParam({ name: 'roll_no', type: 'number' })
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  async getStudent(@Query() query: { roll_no: number }): Promise<any> {
    return await this.studentService.findOne(query.roll_no);
  }
  @Get('/all')
  async getStudents(): Promise<any> {
    return await this.studentService.findAll();
  }
  @Patch('')
  @ApiParam({ name: 'roll_no', type: 'number' })
  @ApiOkResponse({ description: 'The resource was updated successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  async updateStudent(
    @Query() query: { roll_no: number },
    @Body() requestBody,
  ): Promise<any> {
    console.log('roll_no', query.roll_no);
    return await this.studentService.updateStudent(query.roll_no, requestBody);
  }
  @Delete('')
  @ApiParam({ name: 'roll_no', type: 'number' })
  @ApiOkResponse({ description: 'The resource was deleted successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async deleteStudent(@Query() query: { roll_no: number }): Promise<any> {
    return await this.studentService.deleteStudent(query.roll_no);
  }
}
