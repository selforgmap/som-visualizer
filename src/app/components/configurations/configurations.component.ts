import { Component, OnInit } from '@angular/core';
import { SomService } from '../../services/som.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  readonly gridTypes                 = ['Rectangular', 'Hexagonal'];
  readonly nodeInitializationMethods = ['Random', 'PCA'];
  readonly learningRateTypes         = ['Constant'];
  readonly neighborhoodTypes         = ['Bubble', 'Gaussian'];

  som: SomService;

  constructor(somService: SomService) {
    this.som = somService;
  }

  ngOnInit() {
  }

}
