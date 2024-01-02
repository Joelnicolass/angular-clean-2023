import { Observable } from 'rxjs';
import { Task } from '../entities/task/task.entity';
import { TaskRepository } from '../repositories/task_repository/task.repository';

export class GetTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(): Observable<Task[]> {
    return this.taskRepository.getTasks();
  }
}
