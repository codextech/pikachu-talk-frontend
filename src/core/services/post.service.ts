import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  BASE_URL = environment.API_URL
  constructor(private http : HttpClient) { }


  /* single post */
  getPost(id : string) {
    return this.http.get(`${this.BASE_URL}/posts/${id}`)
  }

  /* all data */
  getAllPosts() {
    return this.http.get(`${this.BASE_URL}/posts`)
  }

  getMyPosts() {
    return this.http.get(`${this.BASE_URL}/posts/me`)
  }

  /* create data */
  addPost(body : any) {
    /* api call */
    return this.http.post(`${this.BASE_URL}/posts` , body)
  }

}
