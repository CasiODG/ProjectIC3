import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitAddPageRoutingModule } from './produit-add-routing.module';

import { ProduitAddPage } from './produit-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProduitAddPage]
})
export class ProduitAddPageModule {}
