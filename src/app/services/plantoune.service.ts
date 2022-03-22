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
    this.plantCollection$ = this.httpClient
      .get<Plant[]>(`${this.apiUrl}/list_products`)
      .pipe(
        map((tabObj) => {
          return tabObj.map((obj) => {
            return Plant.build(obj);
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
    return this.httpClient
      .delete(`${this.apiUrl}/list_products/${plantId}`)
      .pipe(tap(() => this.refrechPlant()));
  }

  /**
   * Met à jour une plante
   * @param plant
   * @returns
   */
  updatePlant(plant: Plant): Observable<Plant> {
    const updatedPlant = plant.toBddObject();
    return this.httpClient.patch<Plant>(
      `${this.apiUrl}/list_products/${plant.id}`,
      updatedPlant
    );
  }
}
