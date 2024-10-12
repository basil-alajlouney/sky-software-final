import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-box',
  standalone: true,
  imports: [],
  templateUrl: './count-box.component.html',
  styleUrl: './count-box.component.css'
})
export class CountBoxComponent {
  @Input() context!:string;
  @Input() amount!:number | string;
}
