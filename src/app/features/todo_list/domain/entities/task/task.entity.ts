import { TaskDescription } from './value_objects/descritpion.vo';
import { TaskTitle } from './value_objects/title.vo';

export class Task {
  private _id: string;
  private _title: TaskTitle;
  private _description: TaskDescription;
  private _isDone: boolean;

  constructor(id: string, title: string, description: string, isDone: boolean) {
    this._id = id;
    this._title = new TaskTitle(title);
    this._description = new TaskDescription(description);
    this._isDone = isDone;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title.getValue();
  }

  get description(): string {
    return this._description.getValue();
  }

  get isDone(): boolean {
    return this._isDone;
  }
}
