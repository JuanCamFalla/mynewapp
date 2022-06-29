import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDetail } from './task-detail';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


 tasksInfo: Array<TaskDetail>=
[
  {
    id: 1,
    dueDate: new Date(2022, 7, 7),
    title: "App",
    status: false,
    description: "This is a task for the completion of the app"
  }

];
  constructor() { }

  getTasks(): Array<TaskDetail> {
    console.log("task extraction");
    return this.tasksInfo;
    }

  updateTask(task: TaskDetail) {
    console.log("task update");
    this.tasksInfo[task.id - 1] = task;
    task.status = true;
    }

  deleteTask(task: TaskDetail) {
    console.log("task delete");
    this.tasksInfo.splice(task.id - 1, 1);
  }

  addTask(title: string, description: string, dueDate: Date) {
    console.log("task add");
    this.tasksInfo.push({
      id: this.tasksInfo.length + 1,
      dueDate: dueDate,
      title: title,
      status: false,
      description: description
    });
  }

  updateTaskDate(task: TaskDetail, NewDate: Date) {
    console.log("task date update");
    this.tasksInfo[task.id - 1].dueDate = NewDate;
  }

  updateTaskDescription(task: TaskDetail, newDescription: string) {
    console.log("task description update");
    this.tasksInfo[task.id - 1].description = newDescription;
  }

  updateTaskTitle(task: TaskDetail, newTitle: string) {
    console.log("task title update");
    this.tasksInfo[task.id - 1].title = newTitle;
  }
}

