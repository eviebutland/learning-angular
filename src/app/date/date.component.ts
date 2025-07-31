import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'date',
  imports: [DatePipe],
  templateUrl: './date.component.html',
  styleUrl: './date.component.sass'
})

export class DateComponent {
  today = new Date()
}
