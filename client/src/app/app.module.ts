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



@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
