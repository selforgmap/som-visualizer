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
  private rectSize: number;
  private gap: number = 0;
  private boardSize: number = 250;
  private width: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Load canvas element
    this.canvasElement = (<HTMLCanvasElement>document.getElementById('quadgridCanvas'));
    if (this.canvasElement){
      this.canvasContext = this.canvasElement.getContext('2d');
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
        i * (this.rectSize + this.gap),
        j * (this.rectSize + this.gap),
        this.rectSize,
        `rgb(${r}, ${g}, ${b})`
      );
    }
  }


  // Draw box
  drawBox(context, x, y, recSize, color){
    context.fillStyle = color;
    context.fillRect(x, y, recSize, recSize);
  }

}
