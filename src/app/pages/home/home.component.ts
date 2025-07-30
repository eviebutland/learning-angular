import { Component } from '@angular/core';
import { CounterComponent } from '../../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})

export class HomeComponent {

}
