import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-quadgrid',
  templateUrl: './quadgrid.component.html',
  styleUrls: ['./quadgrid.component.css']
})
export class QuadgridComponent implements OnInit {

  private canvasElement: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;
  private boardSize: number = 250;
  private x_dim: number;
  private y_dim: number;
  private boxSize: number;
  
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    // Load canvas element
    this.canvasElement = (<HTMLCanvasElement>document.getElementById('quadgridCanvas'));
    if (this.canvasElement){
      this.canvasContext = this.canvasElement.getContext('2d');
    }
  }

  // Set matrix data
  public setData(matrix, x_dim, y_dim){
    this.prepareGrid(x_dim, y_dim);
    this.drawGridData(matrix);
  }

  // Prepare grid
  prepareGrid(x_dim, y_dim){
    // Clear grid
    this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    
    this.x_dim = x_dim;
    this.y_dim = y_dim;
    this.boxSize = this.boardSize / Math.max(this.x_dim, this.y_dim);
  }

  // Draw weight matrix grid
  drawGridData(matrix){
    var i, j;
    for(let c = 0; c < matrix.length; ++c){

      // Calculate i,j positions of the box
      i = c % this.x_dim;
      j = Math.floor(c / this.x_dim);

      // Generate RGB values from first 3 data values
      var r = Math.floor(matrix[c][0] * 255 / 100);
      var g = Math.floor(matrix[c][1] * 255 / 100);
      var b = Math.floor(matrix[c][2] * 255 / 100);

      this.drawBox(
        this.canvasContext,
        i * this.boxSize,
        j * this.boxSize,
        `rgb(${r}, ${g}, ${b})`
      );
    }
  }


  // Draw box
  drawBox(context, x, y, color){
    context.fillStyle = color;
    context.fillRect(x, y, this.boxSize, this.boxSize);
  }

}
