import { Component } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})

export class FournisseurComponent {
  hide: boolean = false;
list:Fournisseur[]=[
  {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
  {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
  {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
  {idFournisseur:400,code:"40ABC452",libelle:"asus"}
  ];

  fournisseur:Fournisseur={idFournisseur:105,code:'A104B89',libelle :'MyTeck'};//initailser la classe


  change(){
    this.hide = !this.hide; // Inverse la valeur de hide (de false à true ou de true à false)
    console.log('hide:', this.hide); // Affiche la valeur de hide dans la console du navigateur
  }
  getColor(code: string): string {
    return code.startsWith('2A') ? 'bold' : 'normal';
  }
  supprimerFournisseur(idFournisseur: number): void {
    this.list = this.list.filter(f => f.idFournisseur !== idFournisseur);//filter pour faire le uodate de l affichage apres la supression du fournisseur
  }
}
