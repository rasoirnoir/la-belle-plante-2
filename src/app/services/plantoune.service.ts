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

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/list_products`);
  }

  getPlantFav(userId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `${this.apiUrl}/favPlant?userId=${userId}`
    );
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
    console.log('Création de la plante : ', plant);
    const createdPlant = plant.toBddObject();
    return this.httpClient.post(`${this.apiUrl}/list_products/`, createdPlant);
  }

  /**
   * Supprime une plante
   * @param plantId
   */
  deletePlant(plantId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/list_products/${plantId}`);
  }

  /**
   * Met à jour une plante
   * @param plant
   * @returns
   */
  updatePlant(plant: Plant): Observable<any> {
    const updatedPlant = plant.toBddObject();
    return this.httpClient.patch(
      `${this.apiUrl}/list_products/${plant.id}`,
      updatedPlant
    );
  }
}
