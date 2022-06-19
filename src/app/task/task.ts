import { Title } from "@angular/platform-browser";

export class Task {
  id: number;
  title: string;
  dueDate: Date;
  status: boolean;
    constructor(
      id: number,
      dueDate: Date,
      title: string,
      status: boolean = false
    )
    {
      this.id = id;
      this.title = title;
      this.dueDate = dueDate;
      this.status = status;
    }

}
