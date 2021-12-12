import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TableComponent } from './pages/table/table.component';
import { BubblemenuComponent } from './pages/bubblemenu/bubblemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BubblemenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
