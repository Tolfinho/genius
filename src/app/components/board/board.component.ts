import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components

// Services
import { GameServiceService } from '../../services/game-service.service';

// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  //colors: string[] = [];
  indexes: number[] = []
  sequence: number[] = []
  piecesClicked: number[] = []
  color: string = ""
  speed: number = 0
  points: number = 0

  constructor(private gameService: GameServiceService, private renderer: Renderer2, private router: Router) { 

  }

  ngOnInit() : void {
    //this.colors = this.gameService.getColors();
    this.color = this.gameService.colorPurple
    this.indexes = this.gameService.indexes;
    this.speed = this.gameService.speed
    this.sequence.push(this.getRandomNumber())
    this.showSequence();
  }

  clickPiece(index: number){
    this.piecesClicked.push(index)
    const board: HTMLElement | null = document.getElementById('board');
    const piece = board?.children[index];
    this.renderer.setStyle(piece, 'background-color', this.color);
    setTimeout(() => {
      this.clearAllPieces()
    }, 400)

    if(this.piecesClicked.length === this.sequence.length){
      if(this.isCorrect()) {
        this.gameService.earnPoints(this.sequence.length * 10)
        console.log(this.gameService.getPoints())
        this.showSequence();
      }else {
        alert("Ooops!! Você errou....")
        this.router.navigate(['/'])
      }
    }
  }

  showSequence() : void {

    var i=0;
    const interval = setInterval(() => {
      //console.log(this.sequence[i]);
      //this.clearAllPieces();
      const board: HTMLElement | null = document.getElementById('board');
      const piece = board?.children[this.sequence[i]];
      this.renderer.setStyle(piece, 'background-color', this.color);

      setTimeout(() => {
        this.clearAllPieces()
      }, this.speed-200)

      i++;

      if(i > this.sequence.length-1){
        clearInterval(interval); 
        setTimeout(() => {
          this.clearAllPieces()
        }, this.speed)
      }

    }, this.speed)

    this.sequence.push(this.getRandomNumber())
    this.piecesClicked = []
  }

  getRandomNumber() : number {
    return Math.floor(Math.random()*25)
  }

  isCorrect() : boolean {
    if(JSON.stringify(this.piecesClicked) === JSON.stringify(this.sequence)) return true
    else return false
  }

  clearAllPieces() : void {
    const board: HTMLElement | null = document.getElementById('board');
    for(let i=0;i<board!.children.length;i++){
      this.renderer.setStyle(board?.children[i], 'background-color', '#E0E0E0'); 
    }
  }

}
