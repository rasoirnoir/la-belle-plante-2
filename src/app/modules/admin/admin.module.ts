import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
<<<<<<< HEAD
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  declarations: [PageAdminComponent, TableauComponent],
=======
import { PagesNewComponent } from './pages/pages-new/pages-new.component';
import { PagesEditComponent } from './pages/pages-edit/pages-edit.component';
import { PagesEmptyComponent } from './pages/pages-empty/pages-empty.component';

@NgModule({
  declarations: [PageAdminComponent, PagesNewComponent, PagesEditComponent, PagesEmptyComponent],
>>>>>>> 28a83454b7b5c44f61e685ecf17ec0b1a228258b
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
