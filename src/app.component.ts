import { Component } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'my-app',
  template: `<input [(ngModel)]="name">

<p>Hello {{name}}</p>
  `,
})

export class AppComponent {
  name = 'Angular';
  onKey(event:any) {
    this.name = event.target.value;
  }
}
