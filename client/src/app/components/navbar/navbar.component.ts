import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router :Router,
  ) { }

   onLogoutClick(){
     this.authService.logout();
    // this.flashMessagesService.show('You are logged out', { cssClass:'alert-info' });
    this.router.navigate(['/']);
   }

  ngOnInit() {
  }

}
