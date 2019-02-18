import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransferComponent,
    TransactionsComponent,
    SectionHeaderComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
