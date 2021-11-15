import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: Array<Post> = [];

  ngOnInit(): void {}

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post) => id !== post.id);
  }
  deleteAllPosts() {
    this.posts = [];
  }
}
