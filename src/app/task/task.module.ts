import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaskListComponent, TaskDetailComponent]
})
export class TaskModule { }
