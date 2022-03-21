import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PagesNewComponent } from './pages/pages-new/pages-new.component';
import { PagesEditComponent } from './pages/pages-edit/pages-edit.component';
import { PagesEmptyComponent } from './pages/pages-empty/pages-empty.component';

@NgModule({
  declarations: [PageAdminComponent, PagesNewComponent, PagesEditComponent, PagesEmptyComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
