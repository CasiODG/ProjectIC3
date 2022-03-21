import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitAddPage } from './produit-add.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitAddPageRoutingModule {}
