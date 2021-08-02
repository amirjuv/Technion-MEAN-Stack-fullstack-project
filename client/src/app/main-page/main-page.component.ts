import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private srv: UtilsService, private http: HttpClient,) { }

  subGetAllUsers: Subscription = new Subscription();

  users: User[] = [];
  
  idClicked : string | undefined = '';
  searched: boolean = false;
  filtered: User[] = [];
  isAddUserMode: boolean = false;


  fillWithOrangeColor(iterationId : string | undefined) : boolean {
    if(this.idClicked === iterationId) {
      return true;
    }
    return false;
  }

  wasIdClicked(userCardId : string) {
    this.idClicked = userCardId;
  }

  search(str: string): void {
    this.filtered = [];

    if (str.length >= 1) {
      this.searched = true;
      this.users.forEach((searchForUser) => {
        if (searchForUser.name != null && searchForUser.email != null) {
          if (
            searchForUser.name
              .toLocaleLowerCase()
              .includes(str.toLocaleLowerCase()) == true
          ) {
            this.filtered.push(searchForUser);
          } else if (
            searchForUser.email
              .toLocaleLowerCase()
              .includes(str.toLocaleLowerCase()) == true
          ) {
            this.filtered.push(searchForUser);
          }
        }
      }
      );
      this.router.navigate(['']);
    } else {
      this.searched = false;
    }
    return;
  }

  add(valid: boolean | null) {

  }

  cancel() {

  }

  ngOnInit(): void {
    this.subGetAllUsers = this.srv.getAllUsers("http://localhost:8000/users").subscribe(data => this.users = data);
  }

  ngOnDestroy() {
    if (this.subGetAllUsers) {
      this.subGetAllUsers.unsubscribe();
    }
  }

}
