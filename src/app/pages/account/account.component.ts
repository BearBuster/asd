import {Component, OnInit} from '@angular/core';
import {IUserInfo} from "../../interfaces/UserInfo";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userInfo: IUserInfo = {
    name: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    phone: '',
    about: ''
  };
  UserFormGroup: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('userId');
    if(userId === null){
      userId = '0';
    }
    this.userService.getUserInfo(parseInt(userId)).subscribe((data)=>{
      this.userInfo = data;
      console.log(data)
      this.initUserForm();
    });
  }

  updateUserInfo(){
    this.userService.updateUserInfo(this.userInfo).subscribe((data) => {
      this.userInfo = data;
    });
  }

  initUserForm(){
    this.UserFormGroup = this.formBuilder.group({

    })
  }

}
