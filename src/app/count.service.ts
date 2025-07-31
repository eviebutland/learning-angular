import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CounterService {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() { }

  increment = () => {
    this.count.set(this.count() + 1);
  };

  incrementChosenNumber = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value) || 0;
    console.log('value', value);
    this.count.set(value);
  };
}
