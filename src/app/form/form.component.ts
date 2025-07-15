import { Component } from '@angular/core';

@Component({
  selector: 'appForm', // can use camelCase
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass',
})

// TODO: build out form with reactive elements
// - reactive forms (better for scaling)
// - template driven forms (more basic)
// - form validation
// - form submission
// - Update data and send to server (or json file)
// - form submission with template driven forms
// - form submission with reactive forms and template driven forms
// - form submission with reactive forms and template driven forms
// - form submission with reactive forms and template driven forms
export class FormComponent {
  message = '';

  handleInputOnChange() {
    console.log('input on change');
    this.message = 'on mouse over!';
  }
}
