import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'experiment';


  test(event: any) {
    console.log('continous', event.target.value);
  }

  test2(event: any) {
    console.log('release', event.target.value);
  }
}
