import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../service/task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 task: Task[] = [];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task)=>(
      this.task = task
    ));
  }

}
