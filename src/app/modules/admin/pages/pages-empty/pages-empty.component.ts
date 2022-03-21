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

  ngOnInit(): void {}
}
