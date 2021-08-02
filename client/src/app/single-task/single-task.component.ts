import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { UserTask } from '../user-task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  constructor(private router: Router, private srv: UtilsService, private http: HttpClient) { }

  @Input()
  user: User = new User();
  
  @Input()
  task: UserTask = new UserTask();

  @Input()
  isTaskCompleted : boolean = false;

  subTaskCompleted : Subscription = new Subscription();

  taskCompleted() {
    if(this.task)
    {
      this.task.completed = true;
      this.subTaskCompleted = this.http.put('http://localhost:8000/users/' + this.user._id, this.user).subscribe((status) => this.isTaskCompleted = true); 
      window.location.reload();
    }
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.subTaskCompleted) {
      this.subTaskCompleted.unsubscribe();
    }
  }

}
