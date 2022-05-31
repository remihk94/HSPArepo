import { IPropertyBase } from './../../model/ipropertybase';
import { HousingService } from './../services/housing.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})


export class PropertyListComponent implements OnInit {
  SellRent = 1; // sell
  properties : IPropertyBase[] | any;
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  Today = new Date();
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2; // we are on rent property URL else we are on base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
      this.properties = data;
      console.log(data);
    }, error => {
      console.log('httperror:');
      console.log(error);
    }
  );
  }


  onCityFilter(){
    this.SearchCity = this.City;
  }
  onCityFilterClear(){
    this.SearchCity ='';
    this.City = '';
  }
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
