import { Component } from '@angular/core';
import * as introJs from 'intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'introAppOpt1';

  ngOnInit(): void {
    this.startTour();
  }

  startTour(){
    // const intro = introJs();

    // intro.setOptions({
    //   steps: [
    //     {
    //       intro: 'welcome to our app, let me show you around'
    //     },
    //     {
    //       element: document.querySelector('#feature1'),
    //       intro: "this is f1"
    //     },
    //     {
    //       element: document.querySelector('#feature2'),
    //       intro: "this is f2"
    //     }
    //   ]
    // });
    // intro.start();
  }
}
