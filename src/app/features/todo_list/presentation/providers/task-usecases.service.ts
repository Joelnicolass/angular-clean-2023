import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskRepository } from '../../domain/repositories/task_repository/task.repository';
import { TaskRepositoryImpl } from '../../infrastructure/repositories/task_respository/task.repository_impl';
import { TaskDataSource } from '../../domain/datasource/task_datasource/task.datasource';
import { TaskRemoteDataSource } from '../../infrastructure/datasource/remote/task_datasource/task.datasource_impl';
import { GetTasksUseCase } from '../../domain/usecases/get_tasks.usecase';
import { TaskLocalDataSource } from '../../infrastructure/datasource/local/task_datasource/task.datasoruce_impl';

@Injectable({
  providedIn: 'root',
})
export class TaskUseCasesService {
  private repository: TaskRepository;
  private datasource: TaskDataSource;

  constructor(private httpClient: HttpClient) {
    // this.datasource = new TaskRemoteDataSource(this.httpClient);
    this.datasource = new TaskLocalDataSource();
    this.repository = new TaskRepositoryImpl(this.datasource);
  }

  get getTasks() {
    return new GetTasksUseCase(this.repository);
  }
}
