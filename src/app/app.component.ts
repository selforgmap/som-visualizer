import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Session } from './models/session.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'som-visualizer';
  iterations: number;
  sessions: Session[];

  ngOnInit() {
    this.iterations = 100;

    var s1 = new Session();
    s1.header = "Session 1";
    var s2 = new Session();
    s2.header = "Session 2";
    this.sessions = [s1, s2];
  }

  onClickNewButton($event){
    var s = new Session();
    s.header = "New Session";
    this.sessions.push(s);
  }
}
