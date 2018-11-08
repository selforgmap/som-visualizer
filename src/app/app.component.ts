import { Component } from '@angular/core';
import { SomService } from './services/som.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'som-visualizer';
  som: SomService;

  constructor(somService: SomService){
      this.som = somService;
  }

  test(){
    console.log("test");
  }
}
