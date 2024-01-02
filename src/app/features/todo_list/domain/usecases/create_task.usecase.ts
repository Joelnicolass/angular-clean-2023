import { Observable } from 'rxjs';
import { Task } from '../entities/task/task.entity';
import { TaskRepository } from '../repositories/task_repository/task.repository';

export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(task: Task): Observable<Task> {
    return this.taskRepository.createTask(task);
  }
}
