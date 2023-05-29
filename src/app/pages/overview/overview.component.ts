import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  news: any[];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.news = this.utilsService.getNews()
  }

}
