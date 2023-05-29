import {Component, OnInit, ViewChild} from '@angular/core';
import {LeaderboardsService, recycleType} from "../../services/leaderboards.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-personal-score',
  templateUrl: './personal-score.component.html',
  styleUrls: ['./personal-score.component.scss']
})
export class PersonalScoreComponent implements OnInit{

  importantData:{name: string | undefined, points: number, type: string, procent?: number}[] = []
  sumPoints: number = 0;


  constructor(private leaderboardService: LeaderboardsService, private userService: UserService) {}

  ngOnInit(): void {
    let tmp: {name: string | undefined, points: number, type: string, procent?: number}[] = [];
    this.leaderboardService.getData().subscribe((data) => {
      let userId = localStorage.getItem("userId");
      let id: number;
      if(userId){
        id = parseInt(userId);
      }else {
        id = 0;
      }
      let tmpData = data.filter((row)=>{
        return row.userId == id;
      })
      this.userService.getUsers().subscribe((usersData) => {
        tmpData.forEach((q)=>{
          tmp.push({
            name: usersData.find((w)=>{
              return w.id == q.userId
            })?.name,
            points: q.amount,
            type: recycleType[q.recycleType]
          })
        })
        this.importantData = tmp;
        console.log(tmp)
        this.calconeHindredProcent()
      })
    })
  }

  private calconeHindredProcent() {
    this.sumPoints = this.importantData.reduce((sum, obj) => {
      return sum + obj.points;
    }, 0);

    this.importantData = this.importantData.map((q) => {
      return {
        ...q,
        procent:Math.round(this.sumPoints * q.points / 100)
      }
    }).sort((a, b)=>{
      return a.procent - b.procent
    })
  }
}
