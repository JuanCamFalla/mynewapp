import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tasksInfo } from './data';
import { TaskDetail } from './task-detail';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

constructor() { }

getTasks(): Array<TaskDetail> {
  console.log("task extraction");
  return tasksInfo;
  }
}
