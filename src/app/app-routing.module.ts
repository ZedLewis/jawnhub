import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component';
import { PurchasesComponent } from './pages/purchases/purchases.component'
import { LandingPageComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: "full"},
  { path: 'dashboard', component: LandingPageComponent},
  { path: 'wardrobe', component: WardrobeComponent},
  { path: 'purchases', component: PurchasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LandingPageComponent,
  WardrobeComponent,
  PurchasesComponent
]
