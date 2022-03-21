import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PagesEditComponent } from './pages/pages-edit/pages-edit.component';
import { PagesEmptyComponent } from './pages/pages-empty/pages-empty.component';
import { PagesNewComponent } from './pages/pages-new/pages-new.component';

const routes: Routes = [
	{
		path: '',
		component: PageAdminComponent,
		children: [
			{ path: '', component: PagesEmptyComponent },
			{ path: 'new', component: PagesNewComponent },
			{ path: 'edit/:idParam', component: PagesEditComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
