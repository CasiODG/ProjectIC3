import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProduitAddPage } from './produit-add/produit-add.page';
import { ProduitDetailPage } from './produit-detail/produit-detail.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tique',
    pathMatch: 'full'
  },
  {
    path: 'tique',
    loadChildren: () => import('./tique/tique.module').then( m => m.TiquePageModule)
  },
  {
    path: 'produit-detail',
    loadChildren: () => import('./produit-detail/produit-detail.module').then( m => m.ProduitDetailPageModule)
  },
  {
    path: 'produit-detail/:id',
    component: ProduitDetailPage,
  },

  {
    path: 'add',
    loadChildren: () => import('./produit-add/produit-add.module').then( m => m.ProduitAddPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
