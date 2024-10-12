import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestCardComponent } from "../request-card/request-card.component"
import { FormsModule } from "@angular/forms"
@Component({
  selector: 'app-cards-board',
  standalone: true,
  imports: [RequestCardComponent, FormsModule],
  
  templateUrl: './cards-board.component.html',
  styleUrl: './cards-board.component.css'
})
export class CardsBoardComponent {
  @Input() title!:string;
  @Input() search:string = "";
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(val:string){
    this.searchChange.emit(val);
  }

}
