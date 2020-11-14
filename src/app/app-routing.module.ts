import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Zad1Component } from './zad1/zad1.component';
import { Zad2Component } from './zad2/zad2.component';
import { Zad3Component } from './zad3/zad3.component';
import { Zad4Component } from './zad4/zad4.component';

const routes: Routes = [
  {
    path: '',
    component: Zad1Component
  },
  {
    path: 'Zad2',
    component: Zad2Component
  },
  {
    path: 'Zad3',
    component: Zad3Component
  },
  {
    path: 'Zad4',
    component: Zad4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
