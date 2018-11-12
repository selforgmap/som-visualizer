import { Component, OnInit } from '@angular/core';
import { SomService } from '../../services/som.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  private _responseSubscription: Subscription;
  private _datasetSubscription:  Subscription;

  // Graph Data: Dataset
  dataset = {
    x: [0],
    y: [0],
    z: [0],
    mode: 'markers',
    type: 'scatter3d',
    marker: { color: 'rgb(50, 50, 255)', size: 3 }
  }

  // Graph data: Weight matrix
  weight_matrix = {
    x: [],
    y: [],
    z: [],
    mode: 'markers',
    type: 'scatter3d',
    marker: { color: 'rgb(255, 50, 50)', size: 3 }
  }

  // Graph layout
  layout = {
    title: '',
    autosize: true,
    height: 600,
    width: 880,
    scene: {
        aspectratio: { x: 1, y: 1, z: 1 },
        camera: {
            center: { x: 0, y: 0, z: 0 },
            eye:    { x: 1.25, y: 1.25, z: 1.25 },
            up:     { x: 0, y: 0,  z: 1 }
        },
        xaxis: {
            type: 'linear',
            zeroline: false
        },
        yaxis: {
            type: 'linear',
            zeroline: false
        },
        zaxis: {
            type: 'linear',
            zeroline: false
        }
    }
  }

  // Graph configuration
  config = {
    displayModeBar: false
  }

  constructor(private som: SomService) {
    // Subscribe som response change
    this._responseSubscription = this.som.responseChange.subscribe((res) => {
      this.weight_matrix['x'] = res['result']['weight_matrix'].map((value, index) => { return value[0]; });
      this.weight_matrix['y'] = res['result']['weight_matrix'].map((value, index) => { return value[1]; });
      this.weight_matrix['z'] = res['result']['weight_matrix'].map((value, index) => { return value[2]; });
    });

    // Subscribe som dataset change
    this._datasetSubscription = this.som.datasedChange.subscribe((dataset) => {
      this.dataset['x'] = dataset.map((value, index) => { return value[0]; });
      this.dataset['y'] = dataset.map((value, index) => { return value[1]; });
      this.dataset['z'] = dataset.map((value, index) => { return value[2]; });
    });
  }
  

  ngOnInit() {
  }

  ngOnDestroy(){
    this._datasetSubscription.unsubscribe();
    this._responseSubscription.unsubscribe();
  }

}
