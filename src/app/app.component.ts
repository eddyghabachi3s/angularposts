import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  posts: Post[] = [];

  constructor(
    public mainService: MainService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.mainService
      .getPosts()
      .subscribe((posts) => (this.posts = posts));
  }
}
