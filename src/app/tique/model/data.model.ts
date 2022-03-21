
export enum Category{
  // eslint-disable-next-line @typescript-eslint/naming-convention
  H= 'Homme',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  F= 'Femme',
};

export interface Moreinfo{
  statut: boolean;
  categorie: Category;
  couleur: string;
};

export interface Produit{
  id: number;
  nom: string;
  prix: number;
  taille: number;
  lien: string;
  information: Moreinfo;
}
