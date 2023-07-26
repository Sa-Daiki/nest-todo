import { TodoPriority } from './todo-priority.enum';
import { TodoStatus } from './todo-status.enum';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  priority: TodoPriority;
  due: number;
}
