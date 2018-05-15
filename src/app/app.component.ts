import { Component } from '@angular/core';
import { Enums, C } from '../Enums/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  A = Enums.A.a;
  B = Enums.B.a;
  Cen = C.a;
  constructor() {
    console.log(this.A, this.B, this.Cen);
    console.log(Enums, C);
  }
}
