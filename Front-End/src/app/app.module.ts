import { PropertyDetailResolverService } from './property/property-details/property-details-resolver.service';
import { AuthService } from './property/services/Auth.service';
import { AlertifyService } from './property/services/alertify.service';
import { UserServiceService } from './property/services/user-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown' ;
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserLoginComponent } from './property/users/user-login/user-login.component';
import { UserRegisterComponent } from './property/users/user-register/user-register.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { HousingService } from './property/services/housing.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path:'rent-property' , component:PropertyListComponent},
  {path:'property-details/:id' , component:PropertyDetailsComponent,
      resolve: {prp: PropertyDetailResolverService}},
  {path: 'add-property' , component: AddPropertyComponent },
  {path: 'users/login' , component: UserLoginComponent},
  {path: 'users/register' , component: UserRegisterComponent},
  {path: '**' , component: PropertyListComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService,
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
