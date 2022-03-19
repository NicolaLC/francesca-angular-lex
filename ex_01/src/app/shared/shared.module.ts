import { NgModule } from '@angular/core';
import {ToolbarComponent} from './components/toolbar.component';
import {FooterComponent} from './components/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
