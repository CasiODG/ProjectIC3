import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Article } from '../data.service';
import { Produit } from './model/data.model';

@Component({
  selector: 'app-tique',
  templateUrl: './tique.page.html',
  styleUrls: ['./tique.page.scss'],
})
export class TiquePage implements OnInit {
  @Input()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Liste: Produit[]= [];
  // eslint-disable-next-line @typescript-eslint/ban-types
  vues: Produit[]=[];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Output()
  collect: EventEmitter<any> = new EventEmitter();

  constructor( private data: Article, private vue: Article, private navCtrl: NavController ) {}

  ngOnInit():  void {
       this.Liste= this.data.getAllProdiuit();
}
}

