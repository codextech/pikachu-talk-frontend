import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/core/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  currentPostId : string = '';
  postDetails : any = {};

  imageBaseUrl = environment.IMAGE_BASEURL
  constructor(
    private activatedRoute: ActivatedRoute, /* url access */
    private postService : PostService
  ) { }

  ngOnInit(): void {

    /* postId */
    this.activatedRoute.params.subscribe(result => {
    this.currentPostId = result.id;

     /*  get post details */
      this.getPostDetails();
    })


  }


  getPostDetails() {
    this.postService.getPost(this.currentPostId).subscribe(result => {
    console.log("🚀 details", result)
    this.postDetails = result
    }, err=> {
      console.log(err);
    })
  }


}
