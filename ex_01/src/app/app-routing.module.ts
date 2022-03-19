import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/components/about.component';
import { HomePageComponent } from './views/home-page/components/home-page.component';

const routes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  },
  {
    component: AboutComponent,
    path: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
