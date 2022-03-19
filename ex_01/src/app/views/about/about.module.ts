import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutHeroHeaderComponent } from './components/about-hero-header.component';
import { AboutComponent } from './components/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    AboutHeroHeaderComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
