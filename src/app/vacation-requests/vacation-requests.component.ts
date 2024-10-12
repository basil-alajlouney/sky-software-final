import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RequestCardComponent } from "../request-card/request-card.component";
import { FormsModule } from "@angular/forms";
import { user, leaveRequestBox, vacationRequestBox, sliderInfo , cardInfo, vacationRequests} from "../user-info/info";
@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [HeaderComponent, RequestCardComponent, FormsModule],
  templateUrl: './vacation-requests.component.html',
  styleUrl: './vacation-requests.component.css'
})
export class VacationRequestsComponent {
  user = user;
  leaveRequestBox = leaveRequestBox;
  vacationRequestBox = vacationRequestBox;
  sliderInfo = sliderInfo;
  cardInfo = cardInfo;
  vacationRequests = vacationRequests;
  pendingRequestSearch:string = "";
  search:string = "";
  selectAll:boolean = false;
}
