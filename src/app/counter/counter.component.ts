import { Component } from '@angular/core';
import { CounterService } from '../count.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass'
})

export class CounterComponent {
  isOpen = true

  constructor(public counter: CounterService) { }
}
