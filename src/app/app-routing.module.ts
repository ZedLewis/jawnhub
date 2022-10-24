import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { TransactionsComponent } from './transactions/transactions.component'
import { LandingPageComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full"},
  { path: 'dashboard', component: LandingPageComponent},
  { path: 'display', component: DisplayComponent},
  { path: 'transactions', component: TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LandingPageComponent,
  DisplayComponent, 
  TransactionsComponent
]
