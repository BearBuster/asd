import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ILeaderboardsUser} from "../../interfaces/ILeaderboardUser";
import {LeaderboardsService, recycleType} from "../../services/leaderboards.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit{

  displayedColumns: string[] = ['position', 'name', 'points'];
  dataSource: MatTableDataSource<{name: string | undefined, points: number, type: string}>;
  filterString: string = '';
  filterType: string = 'Glass';
  allData: {name: string | undefined, points: number, type: string}[] = [];


  constructor(private leaderboardService: LeaderboardsService, private userService: UserService) {
    this.dataSource = new MatTableDataSource();
    // this.applyFilter()
  }

  applyFilter() {
    this.dataSource.data = this.leaderboardService.getLeaderboardsByTypee(this.filterType, this.allData)
      .filter((data)=> data.name?.includes(this.filterString.trim())).sort((a, b)=>{ return b.points - a.points})
  }

  ngOnInit(): void {
    let tmp: {name: string | undefined, points: number, type: string}[] = [];
    this.leaderboardService.getData().subscribe((data) => {
      this.userService.getUsers().subscribe((usersData) => {
        data.forEach((q)=>{
          tmp.push({
            name: usersData.find((w)=>{
              return w.id == q.userId
            })?.name,
            points: q.amount,
            type: recycleType[q.recycleType]
          })
        })
        this.allData = tmp;
        this.applyFilter();
      })
    })
  }

}
