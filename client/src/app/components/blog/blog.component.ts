import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;
  form;
  commentForm;
  processing = false;
  username;
  blogPosts;
  newComment =[];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private blogService: BlogService
  ) {
    this.createNewBlogForm();
    this.createCommentForm();
  }

  createNewBlogForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        this.alphaNumericValidation

      ])],
      body: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5),

      ])]


    })
  }

  createCommentForm(){
    this.commentForm=this.formBuilder.group({
      comment:['',Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ])]
    })
  }

  enableFormNewBlogForm() {
    this.form.get('title').enable();
    this.form.get('body').enable();


  }

  diableFormNewBlogForm() {
    this.form.get('title').disable();
    this.form.get('body').disable();
  }



  alphaNumericValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    if (regExp.test(controls.value)) {
      return null;

    } else {
      return { 'alphaNumericValidation': true }
    }
  }

  newBlogForm() {
    this.newPost = true;
  }

  reloadBlogs() {
    this.loadingBlogs = true;

    this.getAllBlogs();

    setTimeout(() => {
      this.loadingBlogs = false;

    }, 4000);
  }

  draftComment(id) {
     this.newComment =[];
    this.newComment.push(id);

  }
  onBlogSubmit() {
    this.processing = true;
    this.diableFormNewBlogForm();

    const blog = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      createdBy: this.username

    }

    this.blogService.newBlog(blog).subscribe(data=>{
      if(!data.success){
        this.messageClass = 'alert alert-danger';
        this.message=data.message;
        this.processing= false;
        this.enableFormNewBlogForm();
      }else{
        this.messageClass= 'alert alert-success';
        this.message=data.message;
        this.getAllBlogs();

      
        setTimeout(( )=>{
          this.newPost=false;
          this.processing=false;
          this.message=false;
          this.form.reset();
          this.enableFormNewBlogForm();

        },200)
      }

    });

  }

  goBack() {
    window.location.reload();
  }

  getAllBlogs(){
    this.blogService.getAllBlogs().subscribe(data=>{
      this.blogPosts = data.blogs;

    });
  }

   likeBlog(id) {
    // Service to like a blog post
    this.blogService.likeBlog(id).subscribe(data => {
      this.getAllBlogs(); // Refresh blogs after like
    });
  }

// Function to disliked a blog post
  dislikeBlog(id) {
    // Service to dislike a blog post 
    this.blogService.dislikeBlog(id).subscribe(data => {
      this.getAllBlogs(); // Refresh blogs after dislike
    });
  }

  postComment(id){

  }

  ngOnInit() {
    // Get profile username on page load
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Used when creating new blog posts and comments
    });

    this.getAllBlogs(); // Get all blogs on component load
  }

}