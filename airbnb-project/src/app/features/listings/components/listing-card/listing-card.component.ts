import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent {
  @Input() title: string = '';
  @Input() price: number = 0;

  @Output() selected = new EventEmitter<void>();

  select() {
    this.selected.emit(); // Emitimos un evento al padre
  }
}
