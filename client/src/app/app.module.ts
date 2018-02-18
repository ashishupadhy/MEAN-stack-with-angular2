import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import{NavbarComponent} from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import{AuthService}from './services/auth.service';
import{BlogService} from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';
import{AuthGuard} from './gaurds/auth.guards';
import{NotAuthGuard} from './gaurds/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component'; 









@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    RegisterComponent,  
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    // FlashMessagesModule
    

    
    
  ],
  providers: [AuthService , AuthGuard, NotAuthGuard,BlogService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
