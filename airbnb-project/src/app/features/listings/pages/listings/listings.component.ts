import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingCardComponent } from '../../components/listing-card/listing-card.component';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, ListingCardComponent],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent {
  listings = [
    { title: 'Casa en la playa', price: 120 },
    { title: 'Apartamento en el centro', price: 90 },
    { title: 'Cabaña en el bosque', price: 75 }
  ];

  onSelected(listing: any) {
    alert(`Seleccionaste: ${listing.title}`);
  }
}

