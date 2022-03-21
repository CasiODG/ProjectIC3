import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Article } from '../data.service';
import { Category, Moreinfo, Produit } from '../tique/model/data.model';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.page.html',
  styleUrls: ['./produit-add.page.scss'],
})
export class ProduitAddPage implements OnInit {

  produitReact: FormGroup=this.test.group({
  //  id:[[], Validators.required],
    lien:[[]],
    nom:[[], Validators.required],
    prix:[[], Validators.required],
    taille:[[], Validators.required],
    //statut:[[], Validators.required],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Categorie:[[], Validators.required],
    couleur:['Femme',Validators.required]
  });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private test: FormBuilder, private Produits: Article, private navCtrl: NavController ) { }

  ngOnInit() {
  }
  save(){
    if(this.produitReact.valid){
      const newInformation: Moreinfo = {
        statut: (this.produitReact.get('prix')?.value > 10),
        categorie: (this.produitReact.get('categorie')?.value === 'homme')? Category.H : Category.F,
        couleur: this.produitReact.get('couleur')?.value,
      };

      const newProduit: Produit = {
        id: 0,
        nom: this.produitReact.get('nom')?.value,
        prix: this.produitReact.get('prix')?.value,
        taille: this.produitReact.get('taille')?.value,
        lien: this.produitReact.get('lien')?.value,
        information: newInformation,
      };
      this.Produits.addProduit(newProduit);
      this.navCtrl.navigateRoot(`clothes`);
    }
  }

}
