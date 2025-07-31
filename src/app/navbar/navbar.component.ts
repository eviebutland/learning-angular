import { Component } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, LowerCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})

export class NavbarComponent {
  items = ['Home', 'About', 'Contact'];
  isOpen = false
}
