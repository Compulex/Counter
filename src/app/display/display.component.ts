import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  num = 0;

  doIncrement(){
    this.num += 1;
  }

  doDecrement(){
    this.num -= 1;
  }
}
