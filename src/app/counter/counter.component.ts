import { Component, inject } from '@angular/core';
import { CounterService } from '../count.service';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass'
})

export class CounterComponent {
  isOpen = true

  // this is the old way to inject services
  // constructor(public counter: CounterService) {}

  // this is the new way to inject services
  counter = inject(CounterService);
}
