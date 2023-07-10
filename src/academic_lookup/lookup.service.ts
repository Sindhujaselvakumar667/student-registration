import { Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';

@Injectable()
export class LookupService {
  constructor(private readonly redisService: RedisService) {}

  async getProgram(programId: string): Promise<any> {
    const redisClient = this.redisService.getClient();
    const cachedProgram = await redisClient.get(`program:${programId}`);
    if (cachedProgram) {
      return JSON.parse(cachedProgram);
    }
    const program = await this.performLookup(programId);
    await redisClient.set(`program:${programId}`, JSON.stringify(program));
    return program;
  }
  async getCourse(CourseId: string): Promise<any> {
    const redisClient = this.redisService.getClient();
    const cachedProgram = await redisClient.get(`course:${CourseId}`);
    if (cachedProgram) {
      return JSON.parse(cachedProgram);
    }
    const course = await this.performLookup(CourseId);
    await redisClient.set(`course:${CourseId}`, JSON.stringify(course));

    return course;
  }
  async getSpecifications(id: string): Promise<any> {
    const redisClient = this.redisService.getClient();
    const cachedProgram = await redisClient.get(`specification:${id}`);
    if (cachedProgram) {
      return JSON.parse(cachedProgram);
    }
    const specification = await this.performLookup(id);
    await redisClient.set(`specification:${id}`, JSON.stringify(specification));

    return specification;
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
