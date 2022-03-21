import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitDetailPageRoutingModule } from './produit-detail-routing.module';

import { ProduitDetailPage } from './produit-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitDetailPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ProduitDetailPage]
})
export class ProduitDetailPageModule {}
