import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    PageAdminComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
