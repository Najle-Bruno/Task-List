import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../components/Task';
import { TASK } from '../components/mock-tasks';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:3000/task'
  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
   return this.http.get<Task[]>(this.apiURL)
  }
}
