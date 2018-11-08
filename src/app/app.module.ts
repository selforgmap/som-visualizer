import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';

// Services
import { SomService } from './services/som.service';



@NgModule({
  declarations: [
    AppComponent,
    ConfigurationsComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [SomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
