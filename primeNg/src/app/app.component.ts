import { Component } from '@angular/core';
import { Product } from './domain/product';
import { ProductService } from './service/productservice';
import {  ConfirmEventType, ConfirmationService } from 'primeng/api';
import {  MessageService } from 'primeng/api';


interface Column {
  field: string;
  header: string;
}
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeNg';
  value: string | undefined;

  value2: string | undefined;
  checkbox1: boolean = false;

  checkbox2: boolean = false;

  category: string | undefined;
  date: Date | undefined;
  yourData: any;
  // products = [
  //   { name: 'Product 1', price: 10.99 },
  //   { name: 'Product 2', price: 19.99 },
  //   { name: 'Product 3', price: 5.99 }
  // ];
  products!: Product[];

  sizes!: any[];

  selectedSize: any = '';

  constructor(private productService: ProductService,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' }
    ];
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }
  cities!: City[];

  selectedCities!: City[];
  selectedCategories: any[] = [];

  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' }
  ];
  position: string = 'center';

    // constructor() {}

    confirmPosition(position: string) {
        this.position = position;

        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: (type: ConfirmEventType) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                        break;
                }
            },
            key: 'positionDialog'
        });
    }
}
