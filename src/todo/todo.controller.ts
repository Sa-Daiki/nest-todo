import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Todo {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() todo: Todo) {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() todo: Todo) {
    return this.todoService.update(todo);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
