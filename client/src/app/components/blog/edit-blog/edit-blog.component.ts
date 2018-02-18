import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  message = false;

  messageClass = false;
  blog={
    title:String,
    body:String
  }

  processing= false;


  constructor(
    private location:Location
  ) { }


  updateBlogSubmit() {}
 
 goBack() {
   this.location.back();
 }

  ngOnInit() {
  
  }

}
