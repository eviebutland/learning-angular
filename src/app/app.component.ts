import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { CounterService } from './count.service';

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

  // this is the old way to inject services
  // constructor(public counter: CounterService) {}

  // this is the new way to inject services
  counter = inject(CounterService);
}
