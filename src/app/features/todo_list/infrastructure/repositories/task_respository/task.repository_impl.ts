import { Observable } from 'rxjs';
import { Task } from '../../../domain/entities/task/task.entity';
import { TaskRepository } from '../../../domain/repositories/task_repository/task.repository';
import { TaskDataSource } from '../../../domain/datasource/task_datasource/task.datasource';

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private readonly taskDataSource: TaskDataSource) {}

  getTasks(): Observable<Task[]> {
    return this.taskDataSource.getTasks();
  }

  getTaskById(id: string): Observable<Task> {
    throw new Error('Method not implemented.');
  }

  createTask(task: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }

  updateTask(task: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }

  deleteTask(task: Task): Observable<Task> {
    throw new Error('Method not implemented.');
  }
}
