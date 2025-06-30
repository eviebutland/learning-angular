import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  items = ['Home', 'About', 'Contact'];

  constructor(public counter: CounterService) {}

  addNewItem() {
    console.log('addNewItem');

    // this doesn't cause a new render to show the items
    this.items.push('New Item');
  }
}
