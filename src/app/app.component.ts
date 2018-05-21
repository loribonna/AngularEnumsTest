import { Component } from '@angular/core';
import { Enums, C } from '../Enums/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    console.log('Enum used in the same namespace', Enums.A);
    console.log('Enum not used in the same namespace', Enums.B);
    console.log('Enum in namespace with assign', Enums.E);
    console.log('Enum in namespace with assign and cast to <any>', Enums.F);
    console.log('Enum outside a namespace', C);
  }
}
