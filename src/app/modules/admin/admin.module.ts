import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  declarations: [PageAdminComponent, TableauComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
