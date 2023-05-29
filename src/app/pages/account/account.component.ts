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

  userInfo: IUserInfo;
  UserFormGroup: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userInfo = this.userService.getUserInfo();
    this.initUserForm();
  }

  updateUserInfo(newUserInfo: IUserInfo){
    this.userService.updateUserInfo(newUserInfo);
  }

  initUserForm(){
    this.UserFormGroup = this.formBuilder.group({

    })
  }

}
