import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { CountBoxComponent } from './count-box/count-box.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CardsBoardComponent } from './cards-board/cards-board.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, RouterLinkActive, 
    HeaderComponent, FontAwesomeModule, ButtonComponent, ProfileCardComponent,
    CountBoxComponent, ImageSliderComponent, CardsBoardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navItems = ["Home", "Profiles", "Reports", "Settings"];
}
