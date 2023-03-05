import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from '../services/customers.service';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDataComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
    //ActivatedRoute
  ],
  providers: [CustomersService],
  exports: [
    CustomerListComponent,
    CustomerDataComponent,
    CustomersComponent
  ]
})
export class CustomersModule { }
