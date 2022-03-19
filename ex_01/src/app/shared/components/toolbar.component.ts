import { Component, Input, OnInit } from '@angular/core';
import { AppLink } from '../../models/app-link.model';

@Component({
  selector: 'app-toolbar',
  template: `
    <div id="toolbar">
      I'm a Toolbar
      <a *ngFor="let link of links" [routerLink]="link.href" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
        <b>{{link.label}}</b>
      </a>
    </div>
  `
})
export class ToolbarComponent {
  @Input() links: AppLink[] = [];
}