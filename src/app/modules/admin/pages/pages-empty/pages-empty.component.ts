import { Component, OnInit } from '@angular/core';
import { PlantouneService } from 'src/app/services/plantoune.service';
import { Category } from '../../models/Category';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-pages-empty',
  templateUrl: './pages-empty.component.html',
  styleUrls: ['./pages-empty.component.scss'],
})
export class PagesEmptyComponent implements OnInit {
  constructor(private plantouneService: PlantouneService) {}

  ngOnInit(): void {
    // this.plantouneService
    //   .getPlantById('952438')
    //   .subscribe((result) => console.log(result));
    // this.plantouneService
    //   .createPlant(new Plant('maPlante', 200, 5, true, Category.bonzaï, '', 1))
    //   .subscribe((response) => console.log(response));
    // this.plantouneService
    //   .deletePlant('cVTq7Lv')
    //   .subscribe((response) => console.log(response));
    // this.plantouneService.getPlantById('QAOVdIF').subscribe((plante: Plant) => {
    //   let modPlant = plante;
    //   modPlant.name = 'coucouc je suis une plante modifiée';
    //   this.plantouneService
    //     .updatePlant(modPlant)
    //     .subscribe((response) => console.log(response));
    // });
  }
}
