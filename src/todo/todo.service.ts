import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [];
  findOne(id: number): Todo {
    const res = this.todoList.find((todo) => todo.id == id);
    console.log(res);
    return res;
  }

  findAll() {
    return this.todoList;
  }

  create(todo: Todo) {
    return this.todoList.push(todo);
  }

  update(todo: Todo) {
    const item = this.findOne(todo.id);
    item.priority = todo.priority;
    return item;
  }

  delete(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id != id);
  }
}
