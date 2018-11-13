import { Component, OnInit } from '@angular/core';
import { SomService } from '../../services/som.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weight-matrix',
  templateUrl: './weight-matrix.component.html',
  styleUrls: ['./weight-matrix.component.css']
})
export class WeightMatrixComponent implements OnInit {

  data: number[][];
  width: number;

  private _responseSubscription: Subscription;


  constructor(private som: SomService) {
    // Subscribe som response change
    this._responseSubscription = this.som.responseChange.subscribe((res) => {
      this.data = [];
      this.width = res['config']['x_dim'];
      var umatrix = res['result']['weight_matrix']; // TODO: Change to umatrix
      for(let i = 0; i < umatrix.length; i += this.width){
        this.data.push(umatrix.slice(i, i + this.width));
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this._responseSubscription.unsubscribe();
  }

}
