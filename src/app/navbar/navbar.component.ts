import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../count.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  items = ['Home', 'About', 'Contact'];
  isOpen = false;

  // dependency injection, a way to share state between components
  counter = inject(CounterService);

  addNewItem() {
    console.log('addNewItem');

    // this doesn't cause a new render to show the items
    this.items.push('New Item');
  }
}
