import { Task } from '../../domain/entities/task/task.entity';
import { TaskModel } from '../models/task.model';

export const taskAdapterList = (tasks: TaskModel[]): Task[] =>
  tasks.map(taskAdapter);

export const taskAdapter = (task: TaskModel): Task =>
  new Task(task.id.toString(), task.title, '', task.completed);
