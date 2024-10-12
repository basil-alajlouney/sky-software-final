import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapse = true;
  @Input() title:string = " ";
  @Input() navItems!:string[];
  @Output() notification = new EventEmitter();
  active = "false";
  constructor (private route:Router){
    setTimeout(() => this.active = route.url.split("/").at(-1)!, 0);
  }

}
