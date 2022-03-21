import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiquePage } from './tique.page';

const routes: Routes = [
  {
    path: '',
    component: TiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiquePageRoutingModule {}
