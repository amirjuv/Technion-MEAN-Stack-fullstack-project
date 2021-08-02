import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detailed-info',
  templateUrl: './user-detailed-info.component.html',
  styleUrls: ['./user-detailed-info.component.css']
})
export class UserDetailedInfoComponent implements OnInit {

  constructor(private router: Router, private srv: UtilsService, private http: HttpClient, private ar: ActivatedRoute
  ) {}

  user: User = new User();
  userId: string = '';
  subGetUser: Subscription = new Subscription();
  subGetUserId: Subscription = new Subscription();

  ngOnInit(): void {
    this.subGetUserId = this.ar.params.subscribe((data) => {
      this.userId = data['id'];
    });
    this.subGetUser = this.srv.getUser('http://localhost:8000/users', this.userId).subscribe((data) => (this.user = data));
  }

  ngOnDestroy() {
    if (this.subGetUser) {
      this.subGetUser.unsubscribe();
    }
    if (this.subGetUserId) {
      this.subGetUserId.unsubscribe();
    }
  }

}
