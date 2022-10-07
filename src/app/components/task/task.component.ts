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

  deleteTask(task:Task) {
    this.taskService.deleteTask(task).subscribe(()=>
    this.task = this.task.filter( t => t.id !== task.id))
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((task)=> (
      this.task.push(task)));
  }
  
}
