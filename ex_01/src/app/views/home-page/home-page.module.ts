import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageHeroHeaderComponent } from './components/home-page-hero-header.component';
import { HomePageComponent } from './components/home-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomePageComponent,
    HomePageHeroHeaderComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
