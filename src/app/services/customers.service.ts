import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private clientes: Customer[]

  constructor() {
    this.clientes = [
      {id: 1, nom: 'Pep Garcia Lopez', dir: 'Plaça Espanya s/n', obs: 'Facturarle en cuatro  vencimientos'},
      {id: 2, nom: 'Carles Martinez Torres', dir: 'C/Del Pi 456', obs: 'Tiene un descuento  adicional de un 4%'},
      {id: 3, nom: 'Maria Gutierrez Sanz', dir: 'Passeig de Gràcia 923'},
      {id: 4, nom: 'Luis Romero Cuadrado', dir: 'C/San Pau 344', obs: 'Siempre enviarle el  material al almacén de Girona'}
    ]
   }

  public getClientes(): Customer[] {	return this.clientes;	}
  public getCliente(id: number): Customer {
    return this.clientes.filter(cliente => cliente.id == id)[0];
   }
}
