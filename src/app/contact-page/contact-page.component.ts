import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  _cardTitle = "Isaiah Dorado";
  _cardSubTitle = "Contact Info";
  _cardMessage = "You can reach me at my email";
  _buttonName = "Home";
  _routeLocation = "";

  constructor() { }

  ngOnInit(): void {
  }

}
