import { Body, Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { AcademyLookup } from './lookup.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LookupService {
  constructor(
    private readonly redisService: RedisService,
    @InjectRepository(AcademyLookup)
    private lookUpRepository: Repository<AcademyLookup>,
  ) {}
  async addLookUp(@Body() requestBody): Promise<any> {
    return await this.lookUpRepository.insert(requestBody);
  }
  async getProgram(programId: string): Promise<any> {
    const redisClient = this.redisService.getClient();
    const cachedProgram = await redisClient.get(`program:${programId}`);
    console.log('cachedProgram', cachedProgram);
    if (cachedProgram) {
      return JSON.parse(cachedProgram);
    }
    const programIdNum: number = +programId;
    const program = await this.lookUpRepository.findOne({
      where: {
        id: programIdNum,
        lookupName: 'program',
      },
    });
    console.log('program from db', program);
    if (program) {
      await redisClient.set(
        `program:${programId}`,
        JSON.stringify(program?.lookupData),
      );
      return program?.lookupData;
    } else {
      return 'No data for this id in db';
    }
  }
  async getCourse(CourseId: string): Promise<any> {
    const courseIdNum: number = +CourseId;
    const redisClient = this.redisService.getClient();
    const cachedProgram = await redisClient.get(`course:${CourseId}`);
    if (cachedProgram) {
      return JSON.parse(cachedProgram);
    }
    const course = await this.lookUpRepository.findOne({
      where: {
        id: courseIdNum,
        lookupName: 'course',
      },
    });
    if (course) {
      await redisClient.set(
        `course:${CourseId}`,
        JSON.stringify(course?.lookupData),
      );
      return course?.lookupData;
    } else {
      return 'No data for this id in db';
    }
  }
  async getSpecifications(id: string): Promise<any> {
    const specIdNum: number = +id;
    const redisClient = this.redisService.getClient();
    const cachedSpec = await redisClient.get(`specification:${id}`);
    if (cachedSpec) {
      return JSON.parse(cachedSpec);
    }
    const specification = await this.lookUpRepository.findOne({
      where: {
        id: specIdNum,
        lookupName: 'specification',
      },
    });
    if (specification) {
      await redisClient.set(
        `spec:${id}`,
        JSON.stringify(specification?.lookupData),
      );
      return specification?.lookupData;
    } else {
      return 'No data for this id in db';
    }
  }
  private async performLookup(id: string): Promise<any> {
    const data = {
      id: id,
      name: 'Computer Science',
      credits: 120,
    };

    return data;
  }
}
