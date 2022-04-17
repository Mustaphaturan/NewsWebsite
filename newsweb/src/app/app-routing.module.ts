import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [

  { path: '', component: TopheadingComponent }, //Anasayfa 
  { path: 'tech',component:TechnewsComponent}, //Teknoloji
  { path: 'business',component:BusinessnewsComponent}, //Business
  { path: 'health',component:HealthComponent}  //health
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
