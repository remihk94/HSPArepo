import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  Property: any = {
    "id": 1,
    "Name": "Rama Hayek",
    "Type":"House",
    "Price":1200
  }
  constructor() { }

  ngOnInit(): void {
  }

}
