import { Injectable } from '@angular/core';
import { Observable, Subject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Plant } from '../modules/admin/models/plant';

@Injectable({
	providedIn: 'root',
})
export class PlantouneService {
	plantLiked$ = new Subject<any>();
	public plantCollection$ = new Observable<Plant[]>();
	public subPlantCollection$ = new Subject<Plant[]>();
	apiUrl: string;

	constructor(private httpClient: HttpClient) {
		this.apiUrl = environment.apiUrl;
		this.plantCollection$ = this.httpClient.get<Plant[]>(`${this.apiUrl}/list_products`).pipe(
			map((tabObj) => {
				return tabObj.map((obj) => {
					return this.unmap(obj);
				});
			})
		);
	}

	public refrechPlant(): void {
		this.plantCollection$.subscribe((arrayPlant: Plant[]) => {
			console.log('arrayPlant:', arrayPlant);
			this.subPlantCollection$.next(arrayPlant);
		});
	}

	/**
	 *
	 * @param plante Map une plante pour l'envoyer dans la bdd
	 * @returns
	 */
	public map(plante: Plant): any {
		return {
			id: plante.id,
			product_name: plante.name,
			product_price: plante.price,
			product_instock: plante.instock,
			product_qty: plante.quantity,
			product_breadcrumb_label: plante.category,
			product_url_picture: plante.urlPicture,
			product_rating: plante.rating,
		};
	}

	/**
	 * demap une plante provenant de la bdd
	 * @param plante
	 * @returns
	 */
	public unmap(plante: any): Plant {
		return new Plant(
			plante['product_name'],
			plante['product_price'],
			plante['product_qty'],
			plante['product_instock'],
			plante['product_breadcrumb_label'],
			plante['product_url_picture'],
			plante['product_rating'],
			plante['id']
		);
	}

	getData(): Observable<any[]> {
		return this.httpClient.get<any[]>(`${this.apiUrl}/list_products`);
	}

	getPlantFav(userId: number): Observable<any[]> {
		return this.httpClient.get<any[]>(`${this.apiUrl}/favPlant?userId=${userId}`);
	}

	/**
	 * Récupère une plante à partir de son id
	 * @param plantId
	 * @returns
	 */
	getPlantById(plantId: string): Observable<any> {
		return this.httpClient.get(`${this.apiUrl}/list_products/${plantId}`);
	}

	/**
	 * Crée une nouvelle plante
	 */
	createPlant(plant: Plant): Observable<any> {
		return this.httpClient.post(`${this.apiUrl}/list_products/`, this.map(plant));
	}

	/**
	 * Supprime une plante
	 * @param plantId
	 */
	deletePlant(plantId: string): Observable<any> {
		return this.httpClient.delete(`${this.apiUrl}/list_products/${plantId}`).pipe(tap(() => this.refrechPlant()));
	}

	/**
	 * Met à jour une plante
	 * @param plant
	 * @returns
	 */
	updatePlant(plant: Plant): Observable<Plant> {
		return this.httpClient.put<Plant>(`${this.apiUrl}/list_products/${plant.id}`, this.map(plant));
	}
}
