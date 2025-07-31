import { Component } from '@angular/core';
import { DateComponent } from '../../date/date.component';
import { CurrencyComponent } from '../../currency/currency.component';
import { ReversePipe } from '../../pipes/reverse.pipe';


@Component({
  selector: 'app-about',
  imports: [DateComponent, CurrencyComponent, ReversePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})

export class AboutComponent {
  town = 'Witney'
}
