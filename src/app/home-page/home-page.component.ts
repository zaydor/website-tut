import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  websiteName = "Website Tutorial";
  myName = "Isaiah Dorado";
  myOccupation = "Angular Developer";
  myMessage = "Welcome to my Website!";

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  public contactButtonEvent() {
    this._router.navigate(["contact-page"]).then(r => console.log(r));
  }

}
