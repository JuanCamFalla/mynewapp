import { Task } from "./task";
export class TaskDetail extends Task {

  description: string;
  constructor(
    id: number,
    dueDate: Date,
    title: string,
    status: boolean = false,
    description: string
  ) {
    super(id, dueDate, title, status);
    this.description = description;
  }
}
