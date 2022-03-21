import { getCurrencySymbol, getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { PlantouneService } from 'src/app/services/plantoune.service';
import { Plant } from '../../models/plant';



@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  tableau!: Plant[];
  indiceChoixPlante!: string[];
  planteChoisie!: Plant;
  


  constructor(private plantouneService: PlantouneService, private router:Router) {
    this.tableau = [];
  }

  ngOnInit(): void {
   
    this.plantouneService.getData().subscribe((listPlant: any[]) => {
      for (const plante of listPlant) {
        const newPlante = new Plant(plante['product_name'], plante['product_price'], plante['product_qty'], plante['product_instock'], plante['product_breadcrumb_label'], plante['product_url_picture'], 0, plante['product_id']);
        this.tableau.push(newPlante);
      }
      console.log(this.tableau)
    });
 }


  onChoixPlante(i : any){
 
    console.log("coucou clic");
    console.log("indice cliqué = " + i);
    this.indiceChoixPlante=i;
this.planteChoisie=this.tableau[i];
console.log(this.planteChoisie);
this.router.navigate(['/admin/edit'], {queryParams: {idParam : this.indiceChoixPlante} });



    
  }

  



 

}
