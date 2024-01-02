export class TaskDescription {
  constructor(private readonly description: string) {
    if (!this.ensureLenght()) {
      throw new Error('Description must be between 3 and 255 characters');
    }

    if (!this.ensureNotEmpty()) {
      throw new Error('Description must not be empty');
    }

    this.description = description;
  }

  public getValue(): string {
    return this.description;
  }

  public ensureLenght(): boolean {
    return this.description.length >= 3 && this.description.length <= 255;
  }

  public ensureNotEmpty(): boolean {
    return this.description !== '';
  }
}
