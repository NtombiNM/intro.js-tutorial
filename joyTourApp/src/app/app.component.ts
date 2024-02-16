import { Component, OnInit } from '@angular/core';
import { JoyrideService } from 'ngx-joyride';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'joyTourApp';

  constructor(private joyrideService: JoyrideService){}

  ngOnInit(): void {
   this.startTour2();
  }

  startTour(){
    this.joyrideService.startTour({
      steps:['first-step', 'second-step'],
    });
  }

  startTour2(){
    this.joyrideService.startTour({
      steps:['first-step', 'second-step'],
      stepDefaultPosition: 'top',
      themeColor: '#007bff',
    });
  }

}
