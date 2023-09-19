import { Injectable } from '@nestjs/common';

/**
 * сервис нужен для реализации логики программы.
 * Контроллер, из которого дергаются функции сервиса, должен быть максимально чист от логики.
 * Эту задачу берет на себя сервис.
 */
@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
    
  }

  getProfile(): string {
    return 'Profile returned';
  }
}
