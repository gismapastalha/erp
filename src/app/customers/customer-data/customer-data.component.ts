import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  public cliente: Customer;


  constructor( servicio: CustomersService, ruta: ActivatedRoute ) {

    let id = ruta.snapshot.params['id'];
    this.cliente = servicio.getCliente(id);
    console.log(ruta.snapshot.params);

  }

  ngOnInit(): void {
  }

}
