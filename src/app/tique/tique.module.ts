import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiquePageRoutingModule } from './tique-routing.module';

import { TiquePage } from './tique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiquePageRoutingModule
  ],
  declarations: [TiquePage]
})
export class TiquePageModule {}
