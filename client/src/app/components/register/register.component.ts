import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from'@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

form:FormGroup;
constructor(
    private FormBuilder:FormBuilder
  ) {
 this.cerateForm()

   }


 cerateForm(){
  this.form=this.FormBuilder.group({
  
    email:'',
    username:'',
    password:'',
    confirm:''

  })
}
onRegisterSubmilt(){
  console.log(this.form);
}



  


  ngOnInit() {
  }

}

// this.createForm()
  