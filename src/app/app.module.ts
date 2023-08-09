import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MaterialModule } from './material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeCircleComponent } from './homepage/home-circle/home-circle.component';
import { AddCircleOfficeComponent } from './add/add-circle-office/add-circle-office.component';
import { AddDivisionOfficeComponent } from './add/add-division-office/add-division-office.component';
import { AddHeadOfficeComponent } from './add/add-head-office/add-head-office.component';
import { EditCircleOfficeComponent } from './edit/edit-circle-office/edit-circle-office.component';
import { HomeDivisionComponent } from './homepage/home-division/home-division.component';
import { HomeHeadComponent } from './homepage/home-head/home-head.component';
import { EditDivisionOfficeComponent } from './edit/edit-division-office/edit-division-office.component';
import { EditHeadOfficeComponent } from './edit/edit-head-office/edit-head-office.component';
import { ViewCircleOfficeComponent } from './view/view-circle-office/view-circle-office.component';
import { ViewDivisionOfficeComponent } from './view/view-division-office/view-division-office.component';
import { ViewHeadOfficeComponent } from './view/view-head-office/view-head-office.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AddCircleOfficeComponent,
    AddDivisionOfficeComponent,
    AddHeadOfficeComponent,
    HomeCircleComponent,
    HomeDivisionComponent,
    HomeHeadComponent,
    EditCircleOfficeComponent,
    EditDivisionOfficeComponent,
    EditHeadOfficeComponent,
    ViewCircleOfficeComponent,
    ViewDivisionOfficeComponent,
    ViewHeadOfficeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
