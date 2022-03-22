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
  public editPlant!: Plant;

  constructor(
    private plantService: PlantouneService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    // 	const plantId = params.get('idParam');
    // 	console.log(params);
    // });
    //let idParam = this.route.snapshot.params['idParam'];
    // console.log(idParam);
    this.route.paramMap.subscribe((param: ParamMap) => {
      const idParam = param.get('idParam');
      this.clickOnMe(idParam);
    });
  }

  public clickOnMe(idParam: any): void {
    console.log(idParam);
    this.plantService.getPlantById(idParam).subscribe((plant: any) => {
      this.editPlant = Plant.build(plant);
      console.log('lol', this.editPlant);
    });
  }

  public onSumbitEditPlant(submitPlant: Plant): void {
    console.log(submitPlant);
    this.plantService.updatePlant(submitPlant).subscribe(() => {
      alert('Plante Mise à jour :)');
    });
  }
}
