import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/core/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  form: FormGroup;
  currentImage: any;

  constructor(
    private formBuilder : FormBuilder,
    private postService: PostService,
    private router: Router
    ) {

   this.form = this.formBuilder.group({
      title: ['' , Validators.required],
      description: ['' , [Validators.maxLength(200), Validators.required]],
    })

   }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('submited' , this.form.value);
    let model = this.form.value;
    const formData = new FormData();
    /* text + media together to network(api) */
    formData.append('title' , model.title)
    formData.append('description' , model.description);
    formData.append('image' ,  this.currentImage)
    this.postService.addPost(formData).subscribe(result => {
      console.log(result);
      /* reset */
      this.form.reset()
      /* home screen */
      this.router.navigateByUrl('/')

    } ,  err => {
      console.log(err);
    })

  }

  onFileChange(event : any) {
    let file =  event.target.files[0];
    this.currentImage = file;
  }


}
