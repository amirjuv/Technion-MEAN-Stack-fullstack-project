import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { User } from '../user';
import { UserTask } from '../user-task';

@Component({
  selector: 'app-multiple-tasks',
  templateUrl: './multiple-tasks.component.html',
  styleUrls: ['./multiple-tasks.component.css']
})
export class MultipleTasksComponent implements OnInit {

  constructor(private router: Router, private srv: UtilsService, private http: HttpClient) { }

  @Input()
  user : User = new User();

  addedTask : string = '';

  isAddClicked : boolean = false;
 
  subAddTask : Subscription = new Subscription();

  add() {
      this.isAddClicked = true;
  }

  addNewTask(isValid: boolean | null) {
    if (isValid == true) {
      this.user.tasks?.push(new UserTask(undefined, this.addedTask, false));
      this.subAddTask = this.http.put('http://localhost:8000/users/' + this.user._id, this.user).subscribe((status) => console.log('New task added!!')); 
      this.addedTask = '';
      this.cancel();
    } else {
      console.log('failed!');
    }
  }

  cancel() {
    this.isAddClicked = false;
    window.location.reload();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.subAddTask) {
      this.subAddTask.unsubscribe();
    }
  }
}
