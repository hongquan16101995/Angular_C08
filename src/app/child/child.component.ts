import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() string: string = "";
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(event: string) {
    this.newItemEvent.emit(event);
  }
}
