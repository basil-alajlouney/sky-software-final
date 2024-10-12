import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ButtonComponent } from "../button/button.component";
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { CountBoxComponent } from "../count-box/count-box.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { CardsBoardComponent } from "../cards-board/cards-board.component";
import { RequestCardComponent } from "../request-card/request-card.component";
import { user, leaveRequestBox, vacationRequestBox, sliderInfo , cardInfo} from "../user-info/info";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, ProfileCardComponent, CountBoxComponent, ImageSliderComponent, CardsBoardComponent, RequestCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = user;
  vacationRequestBox = vacationRequestBox;
  leaveRequestBox = leaveRequestBox;
  sliderInfo = sliderInfo;
  cardInfo = cardInfo;
  VacationRequestSearch:string = "";
}
