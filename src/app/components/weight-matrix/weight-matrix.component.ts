import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { SomService } from '../../services/som.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weight-matrix',
  templateUrl: './weight-matrix.component.html',
  styleUrls: ['./weight-matrix.component.css']
})
export class WeightMatrixComponent implements OnInit {

  private canvasElement: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private rectSize: number;
  private gap: number = 0;
  private boardSize: number = 250;
  private x_dim: number;

  private _responseSubscription: Subscription;

  constructor(private som: SomService) {
    // Subscribe som response change
    this._responseSubscription = this.som.responseChange.subscribe((res) => {
      this.x_dim = res['config']['x_dim'];
      this.rectSize = this.boardSize / this.x_dim;
      var umatrix = res['result']['weight_matrix']; 
      // Draw weight matrix graph
      this.drawBoardData(this.context, umatrix);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this._responseSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Load canvas element
    this.canvasElement = (<HTMLCanvasElement>document.getElementById('rectangular-lattice'));
    if (this.canvasElement){
      this.context = this.canvasElement.getContext('2d');
    }
  }

  // Draw weight matrix board
  drawBoardData(canvasContext, matrix){
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
        canvasContext,
        i * (this.rectSize + this.gap),
        j * (this.rectSize + this.gap),
        this.rectSize,
        `rgb(${r}, ${g}, ${b})`
      );
    }
  }


  // Draw box
  drawBox(canvasContext, x, y, recSize, color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, recSize, recSize);
  }

}
