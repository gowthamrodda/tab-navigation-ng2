import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public links = { tab1 : 'contacts', tab2: 'location', tab3: 'details', tab4:'thank you'}

  constructor() { }

  ngOnInit() {
  }

}
