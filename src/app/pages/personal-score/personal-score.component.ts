import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-personal-score',
  templateUrl: './personal-score.component.html',
  styleUrls: ['./personal-score.component.scss']
})
export class PersonalScoreComponent {

  data = [  {    "name": "Germany",    "value": 8940000  },  {    "name": "USA",    "value": 5000000  },  {    "name": "France",    "value": 7200000  }];



}
