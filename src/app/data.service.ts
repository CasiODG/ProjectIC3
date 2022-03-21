/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Produit } from './tique/model/data.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class Article{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public Article: Produit[]=
  [
    // {
    //   id: 1,
    //   nom: 'Louis Vuiton',
    //   prix: 150,
    //   taille: 20,
    //   lien: 'assets/images/1.jpg',
    //   information: {
    //     statut: true,
    //     categorie: 'Homme',
    //     couleur: 'bleue'
    //   }
    // },
    // {
    //   id: 2,
    //   nom: 'Gucci',
    //   prix: 150,
    //   taille: 20,
    //   // eslint-disable-next-line max-len
    //   lien: 'assets/images/gucci.png',
    //   information: {
    //     statut: true,
    //     categorie: 'Homme',
    //     couleur: 'bleue'
    //   }
    // },
    // {
    //   id: 3,
    //   nom: 'Adidas',
    //   prix: 150,
    //   taille: 20,
    //   lien: 'assets/images/adidas.png',
    //   information: {
    //     statut: true,
    //     categorie: 'Homme',
    //     couleur: 'bleue'
    //   }
    // }
];

constructor( private storage: Storage, private navCtl: NavController) { this.init();};
async init(){
  const storage = await this.storage.create();
}

public getAllProdiuit(): Produit[]{
  const clothes: Produit[] = [];
  let obj;
  this.storage.forEach((value) => {
    obj = JSON.parse(value);
    const newProduit: Produit = {
      id: obj.id,
      nom: obj.nom,
      prix: obj.prix,
      taille: obj.taille,
      lien: obj.lien,
      information:{
        categorie: obj.information.categorie,
        statut: obj.information.statut,
        couleur: obj.information.couleur,
      },
    };
    console.log(newProduit);
    clothes.push(newProduit);
    this.Article.push(newProduit);
  });
  return clothes;
}

/// Create
public addProduit(vetement: Produit): void{
  let maxId = 0;
  this.storage.forEach((value, key) => {
    console.log(key);
    if(parseInt(key, 10) >= maxId) {maxId = parseInt(key, 10) + 1; console.log('MaxId : ' + maxId);}
  })
  .then(()=>{
    vetement.id = maxId;
    vetement.information.statut= (vetement.prix <= 10);
              const jsonVetement = JSON.stringify(vetement);
              console.log(jsonVetement);
              this.storage.set(maxId.toString(), jsonVetement);
              window.location.reload();
            });
};

getProduit(): Produit [] {
  return this.Article;
};
getProduitById( id: number): Produit| undefined{
const listedata= this.Article.find(value => value.id === id);
return listedata;
};
public removeClothe(id: number): void{
  this.storage.remove(id.toString())
  .then(() => {
    this.navCtl.navigateRoot(`clothes`);
  }).then(() => {window.location.reload();});
};



public removeAllClothe(): void{
  this.storage.clear().then(() => {this.Article = [];});
  window.location.reload();
}


viewSolde() {
  if (Article.arguments.prix >=10){
      console.log('Solde');
  }
  else{
    console.log( 'Pas en solde');
  }
};



// eslint-disable-next-line @typescript-eslint/member-ordering
// public Key= 'my-produit';

// // eslint-disable-next-line @typescript-eslint/member-ordering
// eslint-disable-next-line @typescript-eslint/member-ordering



// // Create
// setProduit( item: Produit): Promise <any>{
//   return this.storage.get(this.Key).then((items: Produit[])=>{
//     if (items){
//       items.push(item);
//       return this.storage.set(this.Key, items);
//     } else{
//       return this.storage.set(this.Key, item);
//     }
//   });
}

