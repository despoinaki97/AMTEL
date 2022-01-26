import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { TableComponent } from './pages/table/table.component';
import { TabletComponent } from './pages/tablet/tablet.component';
import { SelectRoomComponent } from './pages/tablet/select-room/select-room.component';
import { ProfileOptionsComponent } from './pages/tablet/profile-options/profile-options.component';
import { BubblemenuComponent } from './pages/bubblemenu/bubblemenu.component';
import { MenuComponent } from './pages/tablet/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { WallComponent } from './pages/wall/wall.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { WallSharingComponent } from './pages/wall-sharing/wall-sharing.component';
import { TvEmptyComponent } from './pages/tv-empty/tv-empty.component';
import { NotesComponent } from './pages/tablet/notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WallStartComponent } from './wall-start/wall-start.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TabletComponent,
    SelectRoomComponent,
    ProfileOptionsComponent,
    BubblemenuComponent,
    MenuComponent,
    WallComponent,
    CarouselComponent,
    WallSharingComponent,
    TvEmptyComponent,
    NotesComponent,
    WallStartComponent

  ],
  imports: [
    DragDropModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
