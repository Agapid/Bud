import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

/**
 * Вот этот конотроллер - по сути, разруливает маршруты
 * в зависисости от того, ккой запрос делает приложение.
 * Хочет ли приложение добавить запись, тогда 
 * в этом контроллере мы пойдем в процедуру create
 * Хотим удалить - подем в remove. В этом нам помогают деораторы.
 * Но сам контроллер никаких таких мощных обработок запросов не 
 * выполняет. Контролле должен быть чист от кода логики. Вся логика лежит в сервисах.
 * 
 * 
 * А вот здесь в декораторе контроллера прописано user
 * это означает, что к нашему базовому маршруту добавиться слово user
 * и здесь маршрут станет вот таким http://localhost:3000/api/user/
 * Вот этот контроллер создал вот такой роут.
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //http://localhost:3000/api/user/
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //http://localhost:3000/api/user/
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //а вот здесь еще и id добавляется
  //http://localhost:3000/api/user/2
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  //http://localhost:3000/api/user/2
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  //http://localhost:3000/api/user/2
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
