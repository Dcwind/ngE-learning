import { Component, Output ,Input,EventEmitter, OnInit} from '@angular/core';
import {BLUE, RED} from "../../../constants";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Input()
  color:string;

  @Output("color")
  colorOutput = new EventEmitter();

  choose(color:string){
    this.colorOutput.emit(color);
  }

  constructor() { }


  ngOnInit() {
  }

}
