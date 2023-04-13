import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  username: string = 'BearBuster';
  email: string = 'frunze.dimka@gmail.com';
  firstName: string = 'Dumitru'
  lastName: string = 'Frunza'
  address: string = 'Podul Inalt 12/1'
  city: string = 'Chisinau'
  country: string = 'Moldova'
  phone: string = '069395194'
  about: string = 'I am managing this  company   and I am   the company administrator  of this company and the company  that owns'


}
