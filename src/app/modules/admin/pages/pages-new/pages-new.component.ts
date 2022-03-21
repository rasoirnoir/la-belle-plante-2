import { Component, OnInit } from '@angular/core';
import { PlantouneService } from 'src/app/services/plantoune.service';
import { result } from 'underscore';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-pages-new',
  templateUrl: './pages-new.component.html',
  styleUrls: ['./pages-new.component.scss'],
})
export class PagesNewComponent implements OnInit {
  public newPlant = new Plant();

  constructor(private plantouneService: PlantouneService) {}

  ngOnInit(): void {}

  public addNewPlant(submitPlant: Plant): void {
    // console.log('reception de la new plant', submitPlant);
    this.plantouneService.createPlant(submitPlant).subscribe((result) => {
      console.log('Plante crée : ', result);
    });
  }
}
