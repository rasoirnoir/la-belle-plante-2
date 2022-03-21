import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../../models/Category';
import { Plant } from '../../models/plant';
@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	public plant!: Plant;
	public categories = Category;
	public formulaire!: FormGroup;

	constructor(private fp: FormBuilder) {}

	ngOnInit(): void {
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
		console.log(this.categories);
	}

	public onSubmit(): void {
		console.log('le formulaire: ', this.formulaire);
		console.log('Soumis: ', this.formulaire.value);
	}
}
