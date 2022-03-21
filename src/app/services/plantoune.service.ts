import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Plant } from '../modules/admin/models/plant';

@Injectable({
  providedIn: 'root',
})
export class PlantouneService {
  plantLiked$ = new Subject<any>();
  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public map(plante: Plant | Object): Object | Plant {
    if (plante == typeof Plant) {
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
    } else {
      return new Plant();
    }
  }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/list_products`);
  }

  getPlantFav(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.apiUrl}/favPlant?userId=${userId}`
    );
  }

  getPlantById(plantId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/list_products/${plantId}`);
  }

  createPlant(plant: Plant): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/list_products/`, plant);
  }

  deletePlant(plantId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/list_products/${plantId}`);
  }

  updatePlant(plant: Plant): Observable<any> {
    return this.httpClient.patch(
      `${this.apiUrl}/list_products/${plant.id}`,
      plant
    );
  }
}
