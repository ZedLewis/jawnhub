import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayComponent, HistoryComponent]
