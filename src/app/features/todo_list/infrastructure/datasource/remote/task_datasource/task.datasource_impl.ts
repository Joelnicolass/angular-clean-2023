import { Observable, map } from 'rxjs';
import { TaskDataSource } from '../../../../domain/datasource/task_datasource/task.datasource';
import { Task } from '../../../../domain/entities/task/task.entity';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../../../models/task.model';
import { taskAdapterList } from '../../../adapters/task.adapter';

export class TaskRemoteDataSource implements TaskDataSource {
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient
      .get<TaskModel[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((tasks: TaskModel[]) => taskAdapterList(tasks)));
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
