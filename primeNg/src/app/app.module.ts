import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProductService } from './service/productservice';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
// import { CalendarIconDemo } from 'src/app/demo/calendar-icon-demo';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import {  MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TagModule,
    SelectButtonModule,
    CascadeSelectModule,
    MultiSelectModule,
    CheckboxModule,
    // CalendarIconDemo,
    CalendarModule,
    ConfirmDialogModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers: [ProductService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
