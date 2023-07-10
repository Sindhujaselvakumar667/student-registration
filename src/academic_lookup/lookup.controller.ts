import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LookupService } from './lookup.service';
import { ApiTags, ApiParam, ApiOkResponse } from '@nestjs/swagger';
@Controller('/lookup')
@ApiTags('lookup-controller')
export class LookupController {
  constructor(private readonly academicService: LookupService) {}
  @Post()
  addLookUp(@Body() requestBody): Promise<any> {
    return this.academicService.addLookUp(requestBody);
  }
  @Get('/program')
  @ApiParam({
    name: 'programId',
    description: 'pass the programId for the lookup',
    type: 'number',
  })
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  getProgramLookup(@Query() query: { programId: string }): Promise<any> {
    return this.academicService.getProgram(query.programId);
  }
  @Get('/course')
  @ApiParam({
    name: 'courseId',
    description: 'pass the courseId for the lookup',
    type: 'number',
  })
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  getCourseLookup(@Query() query: { courseId: string }): Promise<any> {
    return this.academicService.getCourse(query.courseId);
  }
  @Get('/specification')
  @ApiParam({
    name: 'specificationId',
    description: 'pass the specification for the lookup',
    type: 'number',
  })
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  getSpecificationLookup(@Query() query: { id: string }): Promise<any> {
    return this.academicService.getSpecifications(query.id);
  }
}
