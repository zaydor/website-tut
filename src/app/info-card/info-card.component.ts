import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input()
  cardTitle = "Isaiah Dorado";

  @Input()
  cardSubTitle = "Angular Developer";

  @Input()
  cardMessage = "Welcome to my Website!";

  constructor() { }

  ngOnInit(): void {
  }

}
