import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';
import { PlotComponent } from './components/plot/plot.component';
import { FormsModule } from '@angular/forms'; 

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';




import { HttpClientModule } from '@angular/common/http';
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';


// Services
import { SomService } from './services/som.service';
import { UmatrixComponent } from './components/umatrix/umatrix.component';
import { WeightMatrixComponent } from './components/weight-matrix/weight-matrix.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationsComponent,
    PlotComponent,
    UmatrixComponent,
    WeightMatrixComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    CommonModule,
    PlotlyModule,
    FormsModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatSliderModule,
    MatSnackBarModule
  ],
  providers: [SomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
