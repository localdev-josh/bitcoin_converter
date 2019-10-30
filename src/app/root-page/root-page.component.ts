import { Component, OnInit, Input } from '@angular/core';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.css']
})
export class RootPageComponent implements OnInit {

  guest: Guest;
  name = '';

  constructor(
    private guestService: GuestService,
    private headerTitleService: HeaderTitleService
  ) {}

  ngOnInit() {
    this.headerTitleService.setTitle('Let\'s know you');
  }

  getName(): string{
    return this.name;
  }

  add(): void {
    this.name = this.name.trim();
    if (!this.name) { return ; }
    this.guestService.addGuest({ name: this.name } as Guest);
    console.log(this.name);
  }
}
