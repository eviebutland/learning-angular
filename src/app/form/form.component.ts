import { Component } from '@angular/core';

@Component({
  selector: 'appForm', // can use camelCase
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  message = ''

  handleInputOnChange() {
    console.log('input on change')
    this.message = 'on mouse over!'
  }

}
