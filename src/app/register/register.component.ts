import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router
    ) {


    this.form =  this.formBuilder.group({
      name: ['' ,  Validators.required],
      email: ['' ,  [Validators.required, Validators.email]],
      password: ['' ,  [Validators.required]]
    });

  }

  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
  }

  submit() {
    /* register api call */
    let body = this.form.value;
    console.log("body ", body)
    this.authService.register(body).subscribe(result => {
      console.log(result);

      /* reset form */
      this.form.reset();
      alert('you are registered :) ');

      /* redirect */
      this.router.navigateByUrl('/')

    })
  }

}
