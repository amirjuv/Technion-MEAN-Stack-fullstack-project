import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CardComponent } from './card/card.component';
import { UserDetailedInfoComponent } from './user-detailed-info/user-detailed-info.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { MultiplePostsComponent } from './multiple-posts/multiple-posts.component';
import { MultipleTasksComponent } from './multiple-tasks/multiple-tasks.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [ 
  { path: 'user-detailed-info/:id', component: UserDetailedInfoComponent},
  { path: 'add', component: AddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CardComponent,
    UserDetailedInfoComponent,
    SinglePostComponent,
    MultiplePostsComponent,
    MultipleTasksComponent,
    SingleTaskComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
