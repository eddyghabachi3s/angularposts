import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly apiURL: string = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.apiURL + "/posts");
  }
}
