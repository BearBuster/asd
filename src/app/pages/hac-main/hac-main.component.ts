import { Component } from '@angular/core';
import {AiServiceService} from "../../services/ai-service.service";

@Component({
  selector: 'app-hac-main',
  templateUrl: './hac-main.component.html',
  styleUrls: ['./hac-main.component.scss']
})
export class HacMainComponent {
  youTubeValue: string = '';

  constructor(private aiService: AiServiceService) {}

  youTubeComments(){
    this.aiService.youTubeComments(this.youTubeValue).subscribe((data)=>{
      console.log(data)
    })
  }
}
