import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SomService {

  // Configurations
  public xDim: number;
  public yDim: number;
  public dimension: number;
  public gridType: string;
  public iterationLimit: number;
  public startingLearningRate: number;
  public nodeInitializationMethod: string;
  public learningRateType: string;
  public neighborhoodType: string;
  public minNodeWeight: number;
  public maxNodeWeight: number;
  
  readonly baseURL = 'http://localhost:4200';
  readonly trainURL = this.baseURL + '/train';
  readonly headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  result: {};
  dataset: {};

  constructor(private http: HttpClient) {
    this.xDim = 5;
    this.yDim = 5;
    this.dimension = 3;
    this.gridType = "RECTANGULAR";
    this.iterationLimit = 100;
    this.startingLearningRate = 0.4;
    this.nodeInitializationMethod = 'RANDOM';
    this.learningRateType = 'CONSTANT';
    this.neighborhoodType = 'BUBBLE';
    this.minNodeWeight = 1;
    this.maxNodeWeight = 100;

    this.dataset = [[1,1,1]]; // TODO: Set empty
  }

  train(){
    // Create request data
    var data = {
      'x_dim': this.xDim,
      'y_dim': this.yDim,
      'dimension': this.dimension,
      'grid_type': this.gridType,
      'iteration_limit': this.iterationLimit,
      'starting_learning_rate': this.startingLearningRate,
      'node_initialization_method': this.nodeInitializationMethod,
      'learning_rate_type': this.learningRateType,
      'neighborhood_type': this.neighborhoodType,
      'min_node_weight': this.minNodeWeight,
      'max_node_weight': this.maxNodeWeight,
      'dataset': this.dataset
    }

    // Send train request
    this.http.post(this.trainURL, JSON.stringify(data), { headers: this.headers }).subscribe((res)=> {
      this.result = res;
      console.log(this.result); // TODO: Temp
    })
  }
}
