import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserPost } from '../user-post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor() { }

  @Input()
  user : User = new User();

  @Input()
  post : UserPost = new UserPost();

  ngOnInit(): void {
  }

}
