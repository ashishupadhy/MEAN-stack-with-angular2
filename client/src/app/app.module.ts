import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import{ReactiveFormsModule} from '@angular/forms';
=======
import{ ReactiveFormsModule }  from '@angular/forms';
>>>>>>> 7710718f9df1b9949e49ac635024571705968e0e
import{HttpModule} from '@angular/http';
import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import{NavbarComponent} from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
