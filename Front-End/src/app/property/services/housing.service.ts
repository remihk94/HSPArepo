import { IProperty } from './../../model/iproperty';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from 'src/app/model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<string | any>{
      return this.http.get<string>('http://localhost:5115/api/city')
  }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        // throw new Error('Some error');
        return propertiesArray?.find(p => p.Id === id);
      })
    );
  }
/*
  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('./assets/db.json').pipe(
      map(data => {
      const propertiesArray: Array<Property> = [];
      const local = localStorage.getItem('newProp');
      if(local!==null)
    {  const localProperties = JSON.parse(local);

      if (localProperties) {
        for (const id in localProperties) {
          if (SellRent) {
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
            propertiesArray.push(localProperties[id]);
          }
        } else {
          propertiesArray.push(localProperties[id]);
        }
        }
      }
    }
      for (const id in data) {
        if (SellRent) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
          } else {
            propertiesArray.push(data[id]);
        }
      }
      return propertiesArray;
      })
    );

    return this.http.get<Property[]>('./assets/db.json');
  }*/

  getAllProperties(SellRent?: Number): Observable<Property[]| undefined> {

    return this.http.get<Property[]>('./assets/db.json').pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];


          const localProperties = JSON.parse(localStorage.getItem('newProp') || '{}');

          if (localProperties) {
            for (const id in localProperties) {
              if (SellRent) {
                if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
                  propertiesArray.push(localProperties[id]);
                }
              }
              else {
                propertiesArray.push(localProperties[id]);
              }
            }
          }

        for (const id in data) {
          if (SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          }
          else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;


      })
    );

  }

  addProperty(property: Property) {
    let newProp = [property];

    // add new property in array if new prop already exist in local storage
    if (localStorage.getItem('newProp')) {
      const newId = localStorage.getItem('newProp');
      if (newId != null)
        newProp = [property, ...JSON.parse(newId)];
    }
    localStorage.setItem('newProp', JSON.stringify(property));

  }

  newPropID() {
    const PID = localStorage.getItem('PID');
    if (PID) {
      const updatedPID = String(+PID + 1);

      localStorage.setItem('PID', updatedPID);
      return Number(localStorage.getItem('PID'));
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
