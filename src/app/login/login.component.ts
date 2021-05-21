import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form : FormGroup;
  errorMessage = ''

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router
    ) {


    this.form =  this.formBuilder.group({
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
    this.authService.login(body).subscribe(result => {
      console.log(result);
      /* reset form */
      this.form.reset();
      /* redirect */
      this.router.navigateByUrl('/')

    } , err => {
    console.log("🚀 ~ ~ err", err)
    // alert(err.error.message)
    this.errorMessage = err.error.message
    }

    )
  }



}
