import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  idFacture!: number;
  active!: boolean;

  constructor(private route: ActivatedRoute) { } // Utilisez "route" au lieu de "router"

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idFacture = +params['id'];
      this.active = params['active'] === 'true';
    });
  }
}
