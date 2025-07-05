import { Component } from '@angular/core';
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
  isOpen = false

  constructor(public counter: CounterService) { }

  addNewItem() {
    console.log('addNewItem');

    // this doesn't cause a new render to show the items
    this.items.push('New Item');
  }
}
