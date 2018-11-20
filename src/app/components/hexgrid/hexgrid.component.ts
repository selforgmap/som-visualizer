import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hexgrid',
  templateUrl: './hexgrid.component.html',
  styleUrls: ['./hexgrid.component.css']
})
export class HexgridComponent implements OnInit {

  private canvasElement: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;
  private rectSize: number;
  private gap: number = 0;
  private boardSize: number = 250;
  private width: number;


  hexHeight: number;
  hexRadius: number;
  hexRectangleHeight: number;
  hexRectangleWidth: number;
  hexagonAngle: number = 0.523598776; // 30 degrees in radians
  sideLength: number = 10
  boardWidth: number = 100;
  boardHeight: number = 100;

  constructor() {
    this.hexHeight = Math.sin(this.hexagonAngle) * this.sideLength;
    this.hexRadius = Math.cos(this.hexagonAngle) * this.sideLength;
    this.hexRectangleHeight = this.sideLength + 2 * this.hexHeight;
    this.hexRectangleWidth = 2 * this.hexRadius;
  }

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
  public setData(matrix, width){
    this.width = width;
    this.rectSize = this.boardSize / this.width;
    this.drawBoardData(matrix);
  }

  // Draw weight matrix board
  drawBoardData(matrix){
    var i, j;
    for(let c = 0; c < matrix.length; ++c){

      // Calculate i,j positions of the box
      i = c % this.width;
      j = Math.floor(c / this.width);

      // Generate RGB values from first 3 data values
      var r = Math.floor(matrix[c][0] * 255 / 100);
      var g = Math.floor(matrix[c][1] * 255 / 100);
      var b = Math.floor(matrix[c][2] * 255 / 100);

      this.drawBox(
        this.canvasContext,
        i * this.hexRectangleWidth + ((j % 2) * this.hexRadius), 
        j * (this.sideLength + this.hexHeight), 
        this.rectSize,
        `rgb(${r}, ${g}, ${b})`
      );
    }
  }


  // Draw box
  drawBox(context, x, y, recSize, color){
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
