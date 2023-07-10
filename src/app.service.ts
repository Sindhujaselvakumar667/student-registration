import { Injectable } from '@nestjs/common';

@Injectable() //class is eligible for dependency injection
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
