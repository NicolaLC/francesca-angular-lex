import { Component, OnInit } from '@angular/core';
import { APP_LINKS } from './links-mockup';
import { AppLink } from './models/app-link.model';

@Component({
  selector: 'app-root',
  template: `
    <div id="app">
      <app-toolbar [links]="toolbarLinks"></app-toolbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  toolbarLinks: AppLink[] = APP_LINKS;
}
