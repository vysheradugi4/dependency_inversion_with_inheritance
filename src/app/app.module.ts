
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractorComponent } from 'src/app/contractor/contractor.component';
import { TransactionComponent } from 'src/app/transaction/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    ContractorComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
