import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ButtonComponent } from "../button/button.component";
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { CountBoxComponent } from "../count-box/count-box.component";
import { ImageSliderComponent } from "../image-slider/image-slider.component";
import { CardsBoardComponent } from "../cards-board/cards-board.component";
import { RequestCardComponent } from "../request-card/request-card.component";
import { user, leaveRequestBox, vacationRequestBox, sliderInfo , cardInfo, vacationRequests} from "../user-info/info";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, ProfileCardComponent, CountBoxComponent, ImageSliderComponent, CardsBoardComponent, RequestCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent { 
  user = user;
  leaveRequestBox = leaveRequestBox;
  vacationRequestBox = vacationRequestBox;
  sliderInfo = sliderInfo;
  cardInfo = cardInfo;
  vacationRequests = vacationRequests;
  pendingRequestSearch:string = "";
}