import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learning-angular';
  city = 'London';
  isLoggedIn = true;
  isServerRunning = true;
  isActive = true;

  // Use signals to create and manage state
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

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
