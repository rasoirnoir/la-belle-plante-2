import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PlantouneService } from 'src/app/services/plantoune.service';
import { Plant } from '../../models/plant';

@Component({
	selector: 'app-pages-edit',
	templateUrl: './pages-edit.component.html',
	styleUrls: ['./pages-edit.component.scss'],
})
export class PagesEditComponent implements OnInit {
	public editPlan!: Plant;

	constructor(private plantService: PlantouneService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		// this.route.paramMap.subscribe((params: ParamMap) => {
		// 	const plantId = params.get('idParam');
		// 	console.log(params);
		// });
		let idParam = this.route.snapshot.params['idParam'];
		console.log(idParam);
	}

	public onSumbitEditPlant(submitPlant: Plant): void {
		console.log(submitPlant);
	}
}
