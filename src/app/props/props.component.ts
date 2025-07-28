import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './props.component.html',
})

export class ChildComponent {
  @Input() job = '' // this is a prop
  @Output() incrementCountEvent = new EventEmitter<number>() // this is an event emitter

  addItem() {
    this.incrementCountEvent.emit(1)
  }
}
