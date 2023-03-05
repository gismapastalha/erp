import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoringIncomingComponent } from './storing-incoming/storing-incoming.component';
import { StoringListComponent } from './storing-list/storing-list.component';
import { StoringOutgoingComponent } from './storing-outgoing/storing-outgoing.component';

export const STORING_ROUTES: Routes = [
  {path: 'almacenlista', component: StoringListComponent},
  {path: 'almacenin', component: StoringIncomingComponent},
  {path: 'almacenout', component: StoringOutgoingComponent},
  //{path: '**', pathMatch: 'full', redirectTo: 'almacen'}

];

@NgModule({
  imports: [RouterModule.forChild(STORING_ROUTES)],
  exports: [RouterModule]
})
export class StoringRoutingModule { }
