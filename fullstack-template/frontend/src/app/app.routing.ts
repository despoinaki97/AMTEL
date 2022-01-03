import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { TabletComponent } from './pages/tablet/tablet.component';
import { SelectRoomComponent } from './pages/tablet/select-room/select-room.component';
import { ProfileOptionsComponent } from './pages/tablet/profile-options/profile-options.component';
import { MenuComponent } from './pages/tablet/menu/menu.component';
import { WallComponent } from './pages/wall/wall.component';
import { WallSharingComponent } from './pages/wall-sharing/wall-sharing.component';
import { TvEmptyComponent } from './pages/tv-empty/tv-empty.component';
import { NotesComponent } from './pages/tablet/notes/notes.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'table_start', component:TableComponent},
  { path: 'tablet_start' , component:TabletComponent},
  {path: 'selectRoom' , component:SelectRoomComponent},
  {path: 'profileOptions', component: ProfileOptionsComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'wall',component:WallComponent},
  {path: 'wall_sharing',component:WallSharingComponent},
  {path: 'tv_empty',component:TvEmptyComponent},
  {path: "notes", component:NotesComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
