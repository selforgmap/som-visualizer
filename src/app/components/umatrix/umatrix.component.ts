import { Component, OnInit } from '@angular/core';
import { SomService } from '../../services/som.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-umatrix',
  templateUrl: './umatrix.component.html',
  styleUrls: ['./umatrix.component.css']
})
export class UmatrixComponent implements OnInit {

  umatrix: number[][];
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
      console.log(this.data);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this._responseSubscription.unsubscribe();
  }

}
