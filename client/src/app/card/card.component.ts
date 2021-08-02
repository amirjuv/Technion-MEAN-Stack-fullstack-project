import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private srv: UtilsService) { }

  subDelete: Subscription = new Subscription();
  subUpdate: Subscription = new Subscription();

  @Input()
  user: User = new User();

  @Input()
  noTasksLeft : boolean = false;

  @Input()
  isOrange: boolean = false;

  @Output()
  notify : EventEmitter<string> = new EventEmitter<string>();

  

  isOtherDataVisible: boolean = false;



  tasksCompleted(): boolean {
    if(this.user.tasks)
    {
      const filteredTasks = this.user.tasks.filter(element => {
        return element.completed == false 
      });
      if(filteredTasks.length > 0) {
        return false;
      }
      else {
        return true;
      }
    }

    return false;
  }

  routeToUserExtraData() {  
    this.isOrange = true;
    this.notify.emit(this.user._id);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.router.navigateByUrl('/user-detailed-info/' + this.user._id);
  }

  otherDataHovered() {
    this.isOtherDataVisible = true;
  }

  otherDataClicked() {
    this.isOtherDataVisible = false;
  }

  delete() {
    if (this.user._id != undefined) {
      this.subDelete = this.srv.deleteUser('http://localhost:8000/users', this.user._id).subscribe((status) => { console.log('Deleted!!')
          window.location.reload();
          this.router.navigate(['']);
        });
    }
  }

  update(isValid: boolean | null) {
    if (isValid == true) {
      this.subUpdate = this.http.put('http://localhost:8000/users/' + this.user._id, this.user).subscribe((status) => console.log('Updated!!'));
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.subDelete) {
      this.subDelete.unsubscribe();
    }
    if (this.subUpdate) {
      this.subUpdate.unsubscribe();
    }
  }

}
