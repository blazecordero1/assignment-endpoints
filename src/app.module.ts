import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignments/assignments.controller';

@Module({
  controllers: [AssignmentsController],
})
export class AppModule {}
