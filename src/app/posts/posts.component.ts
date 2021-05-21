import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/core/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts :any = [];
  imageBaseUrl = environment.IMAGE_BASEURL
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    /* posts get */
    this.getPosts()
  }

  getPosts() {
    this.postService.getAllPosts().subscribe(result => {
      console.log(result);
      this.posts = result
    }, err => {
      console.log(err);
    })
  }

}
