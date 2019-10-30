import { Component, OnInit } from '@angular/core';
import { GUESTS } from '../guest-list';
import { Guest } from '../guest';
import { HeaderTitleService } from '../header-title.service';
import { defaults } from '../../assets/currencies';
import { Currencies } from '../currencies';

@Component({
  selector: 'app-choose-currency',
  templateUrl: './choose-currency.component.html',
  styleUrls: ['./choose-currency.component.css'],
})
export class ChooseCurrencyComponent implements OnInit {
  names: Guest[] = GUESTS;
  currency: Currencies[] = defaults;
  
  constructor(
    private headerTitleService: HeaderTitleService
  ) { }


ngOnInit() {
  this.headerTitleService.setTitle('Choose Currency');
}

}
