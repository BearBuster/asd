import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ILeaderboardsUser} from "../../interfaces/ILeaderboardUser";
import {LeaderboardsService} from "../../services/leaderboards.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: MatTableDataSource<ILeaderboardsUser>;
  filterString: string = '';
  filterType: string = 'Glass';


  constructor(private leaderboardService: LeaderboardsService) {
    this.dataSource = new MatTableDataSource();
    this.applyFilter()
  }

  applyFilter() {
    this.dataSource.data = this.leaderboardService.getLeaderboardsByType(this.filterType)
      .filter((data)=> data.name.includes(this.filterString.trim()))
  }

}
