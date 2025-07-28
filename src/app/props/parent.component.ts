import { Component } from '@angular/core';
import { ChildComponent } from './props.component';

@Component({
  selector: 'app-root',
  templateUrl: './parent.component.html',
  imports: [ChildComponent],
})

export class ParentComponent {
  count = 0
  // this component is being used as a parent for app-user. it passes down a prop of 'job', which is defined in
  // props.component.ts
  onClick() {
    this.count++
  }
}
