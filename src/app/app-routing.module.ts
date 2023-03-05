import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { CustomerDataComponent } from './customers/customer-data/customer-data.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomersComponent } from './customers/customers/customers.component';
import { StoringListComponent } from './storing/storing-list/storing-list.component';
import { STORING_ROUTES } from './storing/storing-routing.module';
import { StoringComponent } from './storing/storing/storing.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { SupplierRequestComponent } from './suppliers/supplier-request/supplier-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'clientes', component: CustomersComponent,
  children: [
    { path: 'listaclientes', component:  CustomerListComponent },
    { path: 'detallecliente/:id', component:  CustomerDataComponent },
    { path: '**', pathMatch: 'full', redirectTo:  'clientes' }
    ]
    },
  //{path: 'proveedores', component: SupplierListComponent},
  {path: 'listaProveedores', component: SupplierListComponent },
  {path: 'altaProveedor', component: SupplierRequestComponent },
  {path: 'almacen', component: StoringComponent, children: STORING_ROUTES},
  {path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
