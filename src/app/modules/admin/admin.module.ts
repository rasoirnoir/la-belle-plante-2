import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { FormComponent } from './components/form/form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PagesNewComponent } from './pages/pages-new/pages-new.component';
import { PagesEditComponent } from './pages/pages-edit/pages-edit.component';
import { PagesEmptyComponent } from './pages/pages-empty/pages-empty.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PageAdminComponent,
    TableauComponent,
    PagesNewComponent,
    PagesEditComponent,
    PagesEmptyComponent,
    FormComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
