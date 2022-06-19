import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDetail } from '../task-detail';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<TaskDetail> = [];
  selected: boolean = false;
  selectedTask!: TaskDetail;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  getTasks(): void {
    this.tasks = this.taskService.getTasks()
  }

  onSelected(task: TaskDetail) {
    this.selected = true;
    this.selectedTask = task;

  }
}
