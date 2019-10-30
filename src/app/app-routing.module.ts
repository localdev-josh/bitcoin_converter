import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChooseCurrencyComponent } from './choose-currency/choose-currency.component';
import { ShowConversionComponent } from './show-conversion/show-conversion.component';
import { RootPageComponent } from './root-page/root-page.component';

const routes: Routes = [
  // { path: '', redirectTo: '/RootPageComponent', pathMatch: 'full' },
  {path: '', component: RootPageComponent},
  {path: 'app', component: AppComponent},
  {path: 'currency', component: ChooseCurrencyComponent},
  {path: 'conversion', component: ShowConversionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
