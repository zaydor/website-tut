import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  websiteName = "Website Tutorial";

  @Input()
  buttonName = "Contact";

  @Input()
  routeLocation = "/contact-page";

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  public contactButtonEvent() {
    this._router.navigate(["contact-page"]).then(r => console.log(r));
  }
}
