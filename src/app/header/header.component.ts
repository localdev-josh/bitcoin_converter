import { Component, OnInit } from '@angular/core';
import { RootPageComponent } from '../root-page/root-page.component';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [RootPageComponent]
})
export class HeaderComponent implements OnInit {
  headerTitle = 'Bitcoin Converter';
  title = '';

  constructor(
    private headerTitleService: HeaderTitleService
  ) { }

  ngOnInit() {
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

}
