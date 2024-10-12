import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms"
@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  @Input() name!:string;
  @Input() submissionDate!:string;
  @Input() duration!:string;
  @Input() salary!:string;
  @Input() pfp:string | undefined;
  
  @Input() selected:boolean = false;
}
