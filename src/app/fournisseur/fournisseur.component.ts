import { Component } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})

export class FournisseurComponent {
  hide: boolean = false;


  fournisseur:Fournisseur={idFournisseur:105,code:'A104B89',libelle :'MyTeck'};//initailser la classe


  change(){
    this.hide = !this.hide; // Inverse la valeur de hide (de false à true ou de true à false)
    console.log('hide:', this.hide); // Affiche la valeur de hide dans la console du navigateur
  }

}
