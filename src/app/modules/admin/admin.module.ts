import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [PageAdminComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
