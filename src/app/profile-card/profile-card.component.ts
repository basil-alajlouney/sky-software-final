import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../button/button.component"
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent implements OnInit {
  @Input() compact!:boolean;
  @Input() pfp!:string;
  @Input() name!:string;
  @Input() title!:string;
  @Input() supervisor!:string;
  @Input() corporateLv!:string;
  @Input() lifetime:number | undefined;
  @Input() vacationDays:number | undefined;
  @Input() sickDays:number | undefined;

  ngOnInit(): void {
    if (this.compact && (!this.lifetime || !this.vacationDays || !this.sickDays))
      throw new Error("Missing values for lifetime, vacationDays, sickDays");
  }
}
