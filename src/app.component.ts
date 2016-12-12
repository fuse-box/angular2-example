import { Component } from '@angular/core';
import * as moment from "moment";



@Component({
  selector: 'my-app',
  template: require("~/views/hello.html"),
})

export class AppComponent {
  name = 'Angular';
  onKey(event: any) {
    this.name = event.target.value;
  }
}
