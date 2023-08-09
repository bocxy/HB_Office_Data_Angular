import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCircleOfficeComponent } from './add/add-circle-office/add-circle-office.component';
import { AddHeadOfficeComponent } from './add/add-head-office/add-head-office.component';
import { HomeCircleComponent } from './homepage/home-circle/home-circle.component';
import { AddDivisionOfficeComponent } from './add/add-division-office/add-division-office.component';
import { EditCircleOfficeComponent } from './edit/edit-circle-office/edit-circle-office.component';
import { EditDivisionOfficeComponent } from './edit/edit-division-office/edit-division-office.component';
import { EditHeadOfficeComponent } from './edit/edit-head-office/edit-head-office.component';
import { HomeDivisionComponent } from './homepage/home-division/home-division.component';
import { HomeHeadComponent } from './homepage/home-head/home-head.component';
import { ViewDivisionOfficeComponent } from './view/view-division-office/view-division-office.component';
import { ViewCircleOfficeComponent } from './view/view-circle-office/view-circle-office.component';
import { ViewHeadOfficeComponent } from './view/view-head-office/view-head-office.component';


const routes: Routes = [
   {path: '', redirectTo: 'home-circle', pathMatch: 'full'},
  {path: 'home-circle',component:HomeCircleComponent},
  {path: 'home-division',component:HomeDivisionComponent},
  {path: 'home-head',component:HomeHeadComponent},
  {path: 'add-head-office',component:AddHeadOfficeComponent},
  {path: 'add-circle-office',component:AddCircleOfficeComponent},
  {path: 'add-division-office',component:AddDivisionOfficeComponent},
  {path: 'edit-circle-office/:id',component:EditCircleOfficeComponent},
  {path: 'edit-division-office/:id',component:EditDivisionOfficeComponent},
  {path: 'edit-head-office/:id',component:EditHeadOfficeComponent},
  {path:'view-division-office/:id',component:ViewDivisionOfficeComponent},
  {path:'view-circle-office/:id',component:ViewCircleOfficeComponent},
  {path:'view-head-office/:id',component:ViewHeadOfficeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
