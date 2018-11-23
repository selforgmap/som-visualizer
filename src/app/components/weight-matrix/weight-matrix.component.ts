import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { SomService } from '../../services/som.service';
import { Subscription } from 'rxjs';
import { QuadgridComponent } from '../quadgrid/quadgrid.component';

@Component({
  selector: 'app-weight-matrix',
  templateUrl: './weight-matrix.component.html',
  styleUrls: ['./weight-matrix.component.css']
})
export class WeightMatrixComponent implements OnInit {

  @ViewChild('quadgrid') quadgrid: QuadgridComponent;

  private _responseSubscription: Subscription;

  constructor(private som: SomService) {
    // Subscribe som response change
    this._responseSubscription = this.som.responseChange.subscribe((res) => {
      var x_dim = res['config']['x_dim'];
      var y_dim = res['config']['y_dim'];
      var matrix = res['result']['weight_matrix']; 
      // Draw weight matrix graph
      this.quadgrid.setData(matrix, x_dim, y_dim);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this._responseSubscription.unsubscribe();
  }

}
