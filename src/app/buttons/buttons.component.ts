import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input()
  cNum = 0;

  @Output()
  incrementEvent : EventEmitter<any> = new EventEmitter<any>();

  @Output()
  decrementEvent : EventEmitter<any> = new EventEmitter<any>();

  increment(){
    this.incrementEvent.emit();
  }

  decrement(){
    this.decrementEvent.emit();
  }
}
