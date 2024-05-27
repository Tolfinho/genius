import { Component } from '@angular/core';

// Components
import { BoardComponent } from '../../components/board/board.component';
import { UiComponent } from '../../components/ui/ui.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent, UiComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
