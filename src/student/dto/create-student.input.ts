import { InputType, Int, Field } from '@nestjs/graphql';
import { DateScalar } from 'src/student/date.scalar';
import { ApiProperty } from '@nestjs/swagger';
@InputType()
export class CreateStudentInput {
  @Field(() => Int, { description: 'rollno of the user' })
  @ApiProperty({ example: 10 })
  roll_no: number;
  @Field(() => String)
  @ApiProperty({ example: '9361390616' })
  phone_number: string;
  @Field(() => String)
  @ApiProperty({ example: 'john' })
  first_name: string;
  @Field(() => String)
  @ApiProperty({ example: 'deu' })
  last_name: string; // where string is the type when retrive in application
  @Field(() => DateScalar)
  @ApiProperty({ example: '2002-02-13' })
  dob: Date;
  @Field(() => String)
  @ApiProperty({ example: 'john@gmail.com' })
  email_id: string;
  @Field(() => String)
  @ApiProperty({ example: 'Female' })
  gender: string;
  @Field(() => Int)
  @ApiProperty({ example: '101' })
  country_code: number;
  @Field(() => String)
  @ApiProperty({ example: 'CS' })
  programme: string;
  @Field(() => String)
  @ApiProperty({ example: 'BCA' })
  course: string;
  @Field(() => String)
  @ApiProperty({ example: 'App' })
  specification: string;
}
