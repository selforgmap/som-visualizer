import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabViewModule } from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpinnerModule } from 'primeng/spinner';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ParamsComponent } from './components/params/params.component';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';




@NgModule({
  declarations: [
    AppComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    AccordionModule,
    CheckboxModule,
    MenuModule,
    ToolbarModule,
    ButtonModule,
    MegaMenuModule,
    TabViewModule,
    SplitButtonModule,
    SpinnerModule,
    FormsModule,
    SliderModule,
    FieldsetModule,
    PanelModule,
    InputTextModule,
    InputMaskModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
