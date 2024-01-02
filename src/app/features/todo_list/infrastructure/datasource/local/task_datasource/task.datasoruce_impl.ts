import { Observable, of } from 'rxjs';
import { TaskDataSource } from '../../../../domain/datasource/task_datasource/task.datasource';
import { Task } from '../../../../domain/entities/task/task.entity';

export class TaskLocalDataSource implements TaskDataSource {
  getTasks(): Observable<Task[]> {
    return of([
      new Task('1', 'title 1', 'description 1', false),
      new Task('2', 'title 2', 'description 2', false),
      new Task('3', 'title 3', 'description 3', false),
    ]);
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
