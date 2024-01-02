export interface ApiTaskModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class TaskModel implements ApiTaskModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(user: ApiTaskModel) {
    this.userId = user.userId;
    this.id = user.id;
    this.title = user.title;
    this.completed = user.completed;
  }
}
