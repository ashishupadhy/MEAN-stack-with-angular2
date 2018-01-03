import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
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
