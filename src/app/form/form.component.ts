import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface UserForm {
  name: FormControl<string | null>,
  userName: FormControl<string | null>,
  city: FormControl<string | null>,
  state?: FormControl<string | null>,
  hasAgreed: FormControl<boolean | null>
}

@Component({
  selector: 'appForm',
  imports: [ReactiveFormsModule], // must import this to enable reactive forms
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
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
  userForm = new FormGroup<UserForm>({
    name: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.minLength(5), Validators.required]),
    city: new FormControl("London"),
    state: new FormControl(""),
    hasAgreed: new FormControl(false, Validators.required)
  }); // with reactive forms, each change

  //  creates a new form control instance so we can keep track of changes
  message = '';
  inputValue = 0;

  handleInputOnChange() {
    this.message = 'on mouse over!';
  }

  onUserFormSubmit() {
    console.log('form was submitted', this.userForm.value)
    alert(this.userForm.value)
  }
}
