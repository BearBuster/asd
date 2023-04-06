import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ''
  password: string = '';
  minPasswordLength: number = 6

  constructor(private router: Router) {}

  onLoginFormSubmit(formComponent: NgForm) {
    if(this.password.length <= this.minPasswordLength){
      this.router.navigate(['overview'])
    }
  }
}
