import { Component, OnInit } from '@angular/core';
import { SomService } from '../../services/som.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  // Select item definitions
  readonly gridTypes                 = [{'name': 'Rectangular', 'value': 'RECTANGULAR'},
                                        {'name': 'Hexagonal', 'value': 'HEXAGONAL'}];
  readonly nodeInitializationMethods = [{'name': 'Random', 'value': 'RANDOM'},
                                        {'name': 'PCA', 'value': 'PCA'}];
  readonly learningRateTypes         = [{'name': 'Constant', 'value': 'CONSTANT'}];
  readonly neighborhoodTypes         = [{'name': 'Bubble', 'value': 'BUBBLE'},
                                        {'name': 'Gaussian', 'value': 'GAUSSIAN'}];

  // som: SomService;

  constructor(private  som: SomService) { }

  ngOnInit() {
  }

}
