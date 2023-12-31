import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
