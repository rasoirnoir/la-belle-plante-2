import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';

@Component({
	selector: 'app-pages-edit',
	templateUrl: './pages-edit.component.html',
	styleUrls: ['./pages-edit.component.scss'],
})
export class PagesEditComponent implements OnInit {
	public editPlan!: Plant;

	constructor() {}

	ngOnInit(): void {}

	public onSumbitEditPlant(submitPlant: Plant): void {
		console.log(submitPlant);
	}
}
