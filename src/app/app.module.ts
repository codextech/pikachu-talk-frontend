import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainImageComponent } from './main-image/main-image.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ApiInterceptor } from 'src/core/interceptor/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    AddPostComponent,
    PostDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MainImageComponent,
    MyPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, /* template driven */
    ReactiveFormsModule, /* reactive form */
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : ApiInterceptor , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
