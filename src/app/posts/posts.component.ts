import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Post } from '../post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

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
