import { Component } from '@angular/core';

// Router
import { RouterOutlet } from '@angular/router';

// Views
import { GameComponent } from './views/game/game.component';

// Services
import { GameServiceService } from './services/game-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent],
  providers: [GameServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
