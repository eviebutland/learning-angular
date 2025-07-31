import { Component } from '@angular/core';
import { DateComponent } from '../../date/date.component';
import { CurrencyComponent } from '../../currency/currency.component';

@Component({
  selector: 'app-about',
  imports: [DateComponent, CurrencyComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})

export class AboutComponent {

}
