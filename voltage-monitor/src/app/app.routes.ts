import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/chart', pathMatch: 'full' },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
