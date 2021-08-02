import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private srv: UtilsService, private router: Router, private http: HttpClient
  ) {}

  user: any = { name: '', email: '' };
  sub: Subscription = new Subscription();

  add(isValid: boolean | null) {
    if (isValid == true) {
      this.sub = this.http.post('http://localhost:8000/users', this.user).subscribe((data) => console.log('Added!!'));
      window.location.reload();
    } else {
      console.log('Failed');
    }
  }

  cancel() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
