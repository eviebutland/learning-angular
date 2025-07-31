import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'currency',
  imports: [CurrencyPipe],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.sass'
})

export class CurrencyComponent {
  value = 0
}
