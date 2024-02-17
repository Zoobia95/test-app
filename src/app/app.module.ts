import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InlineSVGModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
