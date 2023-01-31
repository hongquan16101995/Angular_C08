import {Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  demo!: string;
  test!: string;

  addItem(event: string) {
    this.test = event
  }
}
