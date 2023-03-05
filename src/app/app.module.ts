import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { CustomerDataComponent } from './customers/customer-data/customer-data.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomersModule } from './customers/customers.module';
import { CustomersComponent } from './customers/customers/customers.component';
import { StoringModule } from './storing/storing.module';
import { SuppliersModule } from './suppliers/suppliers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    CustomersModule,
    SuppliersModule,
    StoringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
