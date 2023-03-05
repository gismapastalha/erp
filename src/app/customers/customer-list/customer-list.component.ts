import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  clientes: Customer[];

  constructor(private servicioClientes: CustomersService) {
    this.clientes = servicioClientes.getClientes();

   }

  ngOnInit(): void {
  }

}
