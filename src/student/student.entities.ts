import { Column, Entity, PrimaryColumn } from 'typeorm';
import { DateScalar } from './date.scalar';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsDate } from 'class-validator';

@Entity('student__table')
@ObjectType()
export class StudentEntity {
  @PrimaryColumn('int')
  @Field(() => Int, { description: 'rollno of the user' })
  roll_no: number;

  @Column({ type: 'text' })
  @Field(() => String)
  phone_number: string;

  @Column('text')
  @Field(() => String)
  first_name: string;

  @Column('text') //text is the type stores in the DB
  @Field(() => String)
  last_name: string; // where string is the type when retrive in application

  @Column('date')
  @IsDate()
  @Field(() => DateScalar)
  dob: Date;
  // @Column('text')
  // @Field(() => String)
  // dob: string;

  @Column('text') //int, float, boolean, date, datetime
  @Field(() => String)
  email_id: string;

  @Column('text')
  @Field(() => String)
  gender: string;

  @Column('int')
  @Field(() => Int)
  country_code: number;

  @Column('text')
  @Field(() => String)
  programme: string;

  @Column('text')
  @Field(() => String)
  course: string;

  @Column('text')
  @Field(() => String)
  specification: string;
}
