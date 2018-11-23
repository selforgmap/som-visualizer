import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexgrid',
  templateUrl: './hexgrid.component.html',
  styleUrls: ['./hexgrid.component.css']
})
export class HexgridComponent implements OnInit {

  private canvasElement: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;
  private boardSize: number = 250;
  private x_dim: number;
  private y_dim: number;

  hexHeight: number;
  hexRadius: number;
  hexRectangleHeight: number;
  hexRectangleWidth: number;
  sideLength: number;

  HEXAGON_ANGLE: number = 0.523598776; // 30 degrees in radians

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    // Load canvas element
    this.canvasElement = (<HTMLCanvasElement>document.getElementById('hexgridCanvas'));
    if (this.canvasElement){
      this.canvasContext = this.canvasElement.getContext('2d');
      this.canvasContext.fillStyle = "#000000";
      this.canvasContext.strokeStyle = "#CCCCCC";
      this.canvasContext.lineWidth = 1;
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
    this.sideLength = this.boardSize  / (2 * Math.max(this.x_dim, this.y_dim) + 1) / Math.cos(this.HEXAGON_ANGLE);

    this.hexHeight = Math.sin(this.HEXAGON_ANGLE) * this.sideLength;
    this.hexRadius = Math.cos(this.HEXAGON_ANGLE) * this.sideLength;
    this.hexRectangleHeight = this.sideLength + 2 * this.hexHeight;
    this.hexRectangleWidth = 2 * this.hexRadius;
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
        i * this.hexRectangleWidth + ((j % 2) * this.hexRadius), 
        j * (this.sideLength + this.hexHeight), 
        `rgb(${r}, ${g}, ${b})`
      );
    }
  }


  // Draw box
  drawBox(context, x, y, color){
    context.beginPath();
    context.moveTo(x + this.hexRadius, y);
    context.lineTo(x + this.hexRectangleWidth, y + this.hexHeight);
    context.lineTo(x + this.hexRectangleWidth, y + this.hexHeight + this.sideLength);
    context.lineTo(x + this.hexRadius, y + this.hexRectangleHeight);
    context.lineTo(x, y + this.sideLength + this.hexHeight);
    context.lineTo(x, y + this.hexHeight);
    context.closePath();

    context.fillStyle = color;
    context.fill();
  }

}
