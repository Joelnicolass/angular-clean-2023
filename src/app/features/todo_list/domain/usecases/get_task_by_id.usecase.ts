import { Observable } from 'rxjs';
import { Task } from '../entities/task/task.entity';
import { TaskRepository } from '../repositories/task_repository/task.repository';

export class GetTaskByIdUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(id: string): Observable<Task> {
    return this.taskRepository.getTaskById(id);
  }
}
