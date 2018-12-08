import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  xDim: number;
  yDim: number;
  dimension: number;
  gridType: string;
  learningRate: number;
  learningRateMethod: string;
  initializationMethod: string;
  neighborhoodMethod: string;
  iterations: number;


  gridTypeValues: SelectItem[];
  learningRateMethodValues: SelectItem[];
  initializationMethodValues: SelectItem[];
  neighborhoodMethodValues: SelectItem[];


  constructor() {
    this.gridTypeValues = [
      {'label': 'Rectangular','value': 'RECTANGULAR'},
      {'label': 'Hexagonal', 'value': 'HEXAGONAL'}
    ];
    this.learningRateMethodValues = [
      {'label': 'Constant','value': 'CONSTANT'},
      {'label': 'Linear','value': 'LINEAR'},
      {'label': 'Inverse of Time','value': 'INVERSE_OF_TIME'}
    ];
    this.initializationMethodValues = [
      {'label': 'Random','value': 'RANDOM'},
      {'label': 'PCA', 'value': 'PCA'}
    ];
    this.neighborhoodMethodValues = [
      {'label': 'Bubble', 'value': 'BUBBLE'},
      {'label': 'Gaussian', 'value': 'GAUSSIAN'}
    ];

    this.xDim = 10;
    this.yDim = 10;
    this.dimension = 3;
    this.gridType = "RECTANGULAR";
    this.learningRate = 0.01;
    this.learningRateMethod = "CONSTANT";
    this.initializationMethod = "RANDOM";
    this.neighborhoodMethod = "BUBBLE";
  }

  ngOnInit() {

  }

  // Get params object
  getParams(){
    var params =  {
      x_dim: this.xDim,
      y_dim: this.yDim,
      dimenstion: this.dimension,
      grid_type: this.gridType,
      iterations: this.iterations,
      learning_rate: this.learningRate,
      initialization_method: this.initializationMethod,
      learning_rate_method: this.learningRateMethod,
      neighborhood_method: this.neighborhoodMethod
    }
    return params;
  }

}
