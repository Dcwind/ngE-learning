import { Component } from '@angular/core';
import {BLUE, RED} from "../constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color:string;

  onColor(color){
    console.log("color:",color);
  }
}
