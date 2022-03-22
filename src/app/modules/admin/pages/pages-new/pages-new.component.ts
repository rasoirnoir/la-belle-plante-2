import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private plantouneService: PlantouneService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public addNewPlant(submitPlant: Plant): void {
    // console.log('reception de la new plant', submitPlant);
    this.plantouneService.createPlant(submitPlant).subscribe((result) => {
      console.log('Plante crée : ', result);
      this.router.navigate(['/admin']);
    });
  }
}
