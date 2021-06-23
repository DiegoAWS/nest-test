import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/', 301)
  redirectToSwagger(): void {
    return;
  }
}
