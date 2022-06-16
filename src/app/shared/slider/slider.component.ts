import { Component, OnInit } from '@angular/core';
import { Fade } from 'src/app/animations';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: Fade
})
export class SliderComponent implements OnInit {

  imgSource = '';
  state = 'in';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    this.imgSource = environment.imgBackground1;
  }

  onClick() {
    this.counter = 0;
    this.toggleState();
  }

  onDone() {
    if (this.counter === 1) {
      this.toggleImg();
    }
    this.toggleState();
    


  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

  toggleImg() {
    if( this.imgSource == environment.imgBackground1) {
      this.imgSource = environment.imgBackground2;
      console.log(this.imgSource);
      return;
    }
    if( this.imgSource == environment.imgBackground2) {
      this.imgSource = environment.imgBackground3;
      console.log(this.imgSource);
      return;
    }
    if( this.imgSource == environment.imgBackground3) {
      this.imgSource = environment.imgBackground1;
      console.log(this.imgSource);
      return;
    }
  }

}
