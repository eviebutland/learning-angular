import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

// this is how you pass the props down
export class AppComponent {
  title = 'learning-angular';
  city = 'London'
  isLoggedIn = true
  isServerRunning = true
  isActive = true
}
