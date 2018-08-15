import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../models/post';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  post1: Observable<Post[]>;
    constructor(private postsService: PostService) {
  }

  ngOnInit() {
    this.postsService.getPosts()
      .subscribe( data => {
        this.posts = data;
      });
  }


}
