import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SudokuResponse } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): SudokuResponse {
    return this.appService.getHardCodeSudoku();
  }
}
