import { Routes } from '@angular/router';

// Views
import { MenuComponent } from './views/menu/menu.component';
import { GameComponent } from './views/game/game.component';

export const routes: Routes = [
    {
        path: "",
        component: MenuComponent
    },
    {
        path: "game",
        component: GameComponent
    }
];
