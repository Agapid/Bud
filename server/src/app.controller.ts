import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

/*  Контроллер - это по сути маршрут запроса Get к конечной точке. 
  Вот это '/' можно было бы и не писать, т.к. здесь маршрут 
  идет прямо в корень главной страницы   https://youtu.be/P0STc15wFa8?list=PLkUJHNMBzmtRY4akQlLFERebcuZW0mzCs&t=520 
  
  т.е. вот этот Get способен обработать вот такой запрос и никакой другой:
  http://localhost:3000/ (ну или какой порт мы там сейчас слушаем в нашем приложении)

  */
  @Get('/')  
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * А вот этот Get будет обрабатывать уже только вот такой маршрут:
   * 
   * http://localhost:3000/profile
   */
  @Get('profile')  
  getProfile(): string {
    return this.appService.getProfile();
  }


}
