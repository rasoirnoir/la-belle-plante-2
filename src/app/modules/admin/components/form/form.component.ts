import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantouneService } from 'src/app/services/plantoune.service';
import { Category } from '../../models/Category';
import { Plant } from '../../models/plant';
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	@Input() plant = new Plant();
	//public plant = new Plant();
	public categories = Category;
	public formulaire!: FormGroup;
	@Output() submitted = new EventEmitter<Plant>();

	constructor(private fp: FormBuilder, private plantService: PlantouneService, private router: Router) {}

	ngOnInit(): void {
		console.log('theplant', this.plant);
		this.formulaire = this.fp.group({
			name: [this.plant.name],
			price: [this.plant.price],
			quantity: [this.plant.quantity],
			instock: [this.plant.instock],
			category: [this.plant.category],
			urlPicture: [this.plant.urlPicture],
			rating: [this.plant.rating],
			id: [this.plant.id],
		});

		//console.log('cat', this.categories);
	}

	public onSubmit(): void {
		console.log('le formulaire: ', this.formulaire);
		console.log('Soumis: ', this.formulaire.value);

		this.submitted.emit(this.formulaire.value);
	}

	public onDelete(): void {
		// console.log('delete : ', this.plant);
		if (this.plant.id)
			this.plantService.deletePlant(this.plant.id).subscribe((result) => {
				console.log(`Plant ${this.plant.id} deleted.`);
				this.router.navigate(['/admin']);
			});
	}
}
