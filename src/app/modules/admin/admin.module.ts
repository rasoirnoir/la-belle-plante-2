import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { TableauComponent } from './components/tableau/tableau.component';



@NgModule({
  declarations: [
    PageAdminComponent,
    TableauComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
