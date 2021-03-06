import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

    @Input('placeholder')
    text: string;

    constructor() {
      this.text = 'Type your search';

    }

    clear(input){
      console.log("cleared...");
      input.value = "";
    }

  ngOnInit() {
  }

}
