import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetIdentityComponent } from './get-identity/get-identity.component';
import { ChooseCurrencyComponent } from './choose-currency/choose-currency.component';
import { ShowConversionComponent } from './show-conversion/show-conversion.component';
import { RootPageComponent } from './root-page/root-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetIdentityComponent,
    ChooseCurrencyComponent,
    ShowConversionComponent,
    RootPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
