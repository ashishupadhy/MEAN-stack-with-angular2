import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import{NavbarComponent} from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import{AuthService}from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { FlashMessagesModule } from 'angular2-flash-messages';
import{AuthGuard} from './gaurds/auth.guards';








@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    RegisterComponent,  
    LoginComponent,
    ProfileComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    // FlashMessagesModule
    

    
    
  ],
  providers: [AuthService , AuthGuard],
  bootstrap: [AppComponent,]
})
export class AppModule { }
