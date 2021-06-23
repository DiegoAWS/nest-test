import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(@Res() res) {
    return res.redirect('/swagger');
  }
}
