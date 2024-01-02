export class TaskTitle {
  constructor(private readonly title: string) {
    this.title = title;

    if (!this.ensureLenght()) {
      throw new Error('Title must be between 3 and 255 characters');
    }

    if (!this.ensureNotEmpty()) {
      throw new Error('Title must not be empty');
    }
  }

  public getValue(): string {
    return this.title;
  }

  public ensureLenght(): boolean {
    return this.title.length >= 3 && this.title.length <= 255;
  }

  public ensureNotEmpty(): boolean {
    return this.title !== '';
  }
}
