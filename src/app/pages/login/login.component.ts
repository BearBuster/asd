import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ''
  password: string = '';
  minPasswordLength: number = 6
  validLogin: boolean = true;

  constructor(private router: Router, private userService: UserService) {
    console.log(userService.isLoggedIn());
  }

  onLoginFormSubmit(formComponent: NgForm) {
    this.validLogin = true;
    if(this.password.length <= this.minPasswordLength){
      this.userService.login().subscribe((data)=>{
        if(data){
          localStorage.setItem("userId", String(data))
          this.router.navigate(['overview'])
        }else {
          this.validLogin = false;
        }
      })
    }
  }
}
