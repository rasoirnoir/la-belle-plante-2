import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { FormComponent } from './components/form/form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [PageAdminComponent, FormComponent],
	imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
