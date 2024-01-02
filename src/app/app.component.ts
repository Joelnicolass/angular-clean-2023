import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskUseCasesService } from './features/todo_list/presentation/providers/task-usecases.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clean-angular';

  constructor(private taskUseCases: TaskUseCasesService) {
    this.taskUseCases.getTasks.execute().subscribe({
      next: (tasks) => console.log(tasks),
      error: (error) => console.log(error),
    });
  }
}
