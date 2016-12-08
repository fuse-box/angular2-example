import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello Moikka {{name}}</h1>`,
})
export class AppComponent { name = 'Angular'; }
