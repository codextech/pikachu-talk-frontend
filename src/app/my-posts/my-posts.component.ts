import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/core/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {


  posts :any = [];
  imageBaseUrl = environment.IMAGE_BASEURL
  constructor(private postService : PostService) { }

  ngOnInit(): void {
    /* posts get */
    this.getPosts()
  }

  getPosts() {
    this.postService.getMyPosts().subscribe(result => {
      this.posts = result
    }, err => {
      console.log(err);
    })
  }
}
