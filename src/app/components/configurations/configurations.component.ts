import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  readonly gridTypes = ['Rectangular', 'Hexagonal'];
  readonly nodeInitializationMethods = ['Random', 'PCA'];
  readonly learningRateTypes = ['Constant'];
  readonly neighborhoodTypes = ['Bubble', 'Gaussian'];

  xDim: number;
  yDim: number;
  dimension: number;
  gridType: string;
  iterationLimit: number;
  startingLearningRate: number;
  nodeInitializationMethod: string;
  learningRateType: string;
  neighborhoodType: string;
  minNodeWeight: number;
  maxNodeWeight: number;

  constructor() {
    this.xDim = 5;
    this.yDim = 5;
    this.dimension = 3;
    this.gridType = "Rectangular";
    this.iterationLimit = 100;
    this.startingLearningRate = 0.4;
    this.nodeInitializationMethod = 'Random';
    this.learningRateType = 'Constant';
    this.neighborhoodType = 'Bubble';
    this.minNodeWeight = 1;
    this.maxNodeWeight = 100;
  }

  ngOnInit() {
  }

}
