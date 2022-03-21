import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Article } from '../data.service';
import { Produit } from '../tique/model/data.model';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.page.html',
  styleUrls: ['./produit-detail.page.scss'],
})
export class ProduitDetailPage implements OnInit {
  @Input()
  id!: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Produit!: Produit | undefined;

  constructor( private route: ActivatedRoute,
     private dataservice: Article,
      private alert: AlertController,
     private navCtrl: NavController) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe (param =>{
      if (param.get('id')){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.id =+param.get('id')!;
      this.Produit = this.dataservice.getProduitById(this.id);

    }
  });
}

async remove(){
  const alert = await this.alert.create({
    header: 'Attention !!!!',
    message: 'Voulez-vous vraiment supprimer cet article?',
    buttons: [
      {
        text: 'Annuler',
      },
      {
        text: 'Confirmer',
        handler: ()=>{
          this.dataservice.removeClothe(this.id);
        }
      }
    ],
  });
  await alert.present();
}}
