import { Component, OnInit, Input } from '@angular/core';
import { TaskDetail } from '../task-detail';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() taskDetail!: TaskDetail;

  constructor() { }

  ngOnInit() {
  }

}
