import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  changeId(id:number){
    this.active = id;
  }
  active:number = 1;
  @Input() items!:{
      id:number,
      url:string,
      caption:string
    }[];
}
