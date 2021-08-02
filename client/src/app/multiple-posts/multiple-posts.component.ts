import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../services/utils.service';
import { User } from '../user';
import { UserPost } from '../user-post';

@Component({
  selector: 'app-multiple-posts',
  templateUrl: './multiple-posts.component.html',
  styleUrls: ['./multiple-posts.component.css']
})
export class MultiplePostsComponent implements OnInit {

  constructor(private router: Router, private srv: UtilsService, private http: HttpClient) { }

  @Input()
  user : User = new User();

  addedTitle : string = '';
  addedBody : string = '';

  isAddClicked : boolean = false;
  subAddPost : Subscription = new Subscription();

  add() {
      this.isAddClicked = true;
  }

  addNewPost(isValid: boolean | null) {
    if (isValid == true) {
      this.user.posts?.push(new UserPost(undefined, this.addedTitle, this.addedBody));
      this.subAddPost = this.http.put('http://localhost:8000/users/' + this.user._id, this.user).subscribe((status) => console.log('New post added!!'));      
      this.addedTitle = '';
      this.addedBody = '';
      this.cancel();
    } else {
      console.log('failed!');
    }
  }
  
  cancel() {
    this.isAddClicked = false;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.subAddPost) {
      this.subAddPost.unsubscribe();
    }
  }
}
