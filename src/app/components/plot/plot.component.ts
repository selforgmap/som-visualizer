import { Component, OnInit } from '@angular/core';
import { SomService } from '../../services/som.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  // Graph data
  data = [
    {
      x: [1, 2, 3,4,5,5,6,6],
      y: [2, 6, 3,4,5,6,6,7],
      z: [2, 3, 4,4,5,6,6,7],
      mode: 'markers',
      type: 'scatter3d',
      marker: { color: 'rgb(23, 190, 207)', size: 2 }
    }
  ]

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

  config = {
    displayModeBar: false
  }

  constructor(private som: SomService) { }

  loadResultsData(){

  }
  

  ngOnInit() {
  }

}
