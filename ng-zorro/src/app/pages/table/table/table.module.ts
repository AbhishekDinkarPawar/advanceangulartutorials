import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from '../table.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,
    NzButtonModule
  ]
})
export class TableModule { }
