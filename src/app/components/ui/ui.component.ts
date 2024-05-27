import { Component, OnInit } from '@angular/core';

// Services
import { GameServiceService } from '../../services/game-service.service';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent implements OnInit {

  timer: number = 0
  formatedTimer: string = "00:00"

  constructor(protected gameService: GameServiceService) { }

  ngOnInit() : void {

    const interval = setInterval(() => {
      this.timer++
      this.formatTimer()
    }, 1000)

  }

  formatTimer() : void {
    let min
    let sec

    if(this.timer < 60) {
      if(this.timer < 10) this.formatedTimer = "00:0" + this.timer
      else this.formatedTimer = "00:" + this.timer
      return 
    }
      
    min = Math.floor(this.timer/60)
    sec = this.timer - min*60

    if(min < 10){
      if(sec < 10) this.formatedTimer = "0" + min + ":0" + sec
      else this.formatedTimer = "0" + min + ":" + sec
    } else {
      if(sec < 10) this.formatedTimer = min + ":0" + sec
      else this.formatedTimer = min + ":" + sec
    }
  }

}
