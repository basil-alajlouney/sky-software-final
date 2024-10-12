import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnStyle!: "1" | "2";
  @Input() context!: string;
  @Output() click = new EventEmitter();

  btnClicked(event:Event){
    this.click.emit(event);
  }
}
