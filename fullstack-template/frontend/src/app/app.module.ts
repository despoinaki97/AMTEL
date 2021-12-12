import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TableComponent } from './pages/table/table.component';
import { TabletComponent } from './pages/tablet/tablet.component';
import { SelectRoomComponent } from './pages/tablet/select-room/select-room.component';
import { ProfileOptionsComponent } from './pages/tablet/profile-options/profile-options.component';
import { BubblemenuComponent } from './pages/bubblemenu/bubblemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TabletComponent,
    SelectRoomComponent,
    ProfileOptionsComponent,
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
