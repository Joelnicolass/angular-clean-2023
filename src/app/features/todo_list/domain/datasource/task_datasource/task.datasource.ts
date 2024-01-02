import { Observable } from 'rxjs';
import { Task } from '../../entities/task/task.entity';

export interface TaskDataSource {
  getTasks(): Observable<Task[]>;
  getTaskById(id: string): Observable<Task>;
  createTask(task: Task): Observable<Task>;
  updateTask(task: Task): Observable<Task>;
  deleteTask(task: Task): Observable<Task>;
}
