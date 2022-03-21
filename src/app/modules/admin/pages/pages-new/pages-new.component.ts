import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';

@Component({
	selector: 'app-pages-new',
	templateUrl: './pages-new.component.html',
	styleUrls: ['./pages-new.component.scss'],
})
export class PagesNewComponent implements OnInit {
	public newPlant = new Plant();

	constructor() {}

	ngOnInit(): void {}

	public addNewPlant(submitPlant: Plant): void {
		console.log('reception de la new plant', submitPlant);
	}
}
