import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  result: {};

  constructor(private http: HttpClient) {
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

  train(){
    this.http.get(this.baseURL + '/train').subscribe((res) => {
      this.result = res;
      console.log(this.result);
    });
  }
}
