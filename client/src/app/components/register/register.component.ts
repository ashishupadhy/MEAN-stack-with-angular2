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


<<<<<<< HEAD
 cerateForm(){
  this.form=this.FormBuilder.group({
  
=======
 constructor(
    private formBuilder:FormBuilder
  ) {
this.createForm();

   }

 createForm(){
  this.form=this.formBuilder.group({
>>>>>>> 7710718f9df1b9949e49ac635024571705968e0e
    email:'',
    username:'',
    password:'',
    confirm:''

  })
}
onRegisterSubmilt(){
  console.log(this.form);
}


<<<<<<< HEAD

  

=======
>>>>>>> 7710718f9df1b9949e49ac635024571705968e0e

  ngOnInit() {
  }

}

<<<<<<< HEAD
// this.createForm()
  
=======
>>>>>>> 7710718f9df1b9949e49ac635024571705968e0e
