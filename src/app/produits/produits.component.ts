import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatalogueService } from "../services/catalogue.service";
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any;
  size = 5;
  page = 0;
  totalPages;
  currentKeyword;
  pages: Array<number>;
  constructor(private httpClient: HttpClient, private catalogueService: CatalogueService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
this.onGetProducts();
  }

  onGetProducts() {

    this.catalogueService.getProduits(this.page, this.size).subscribe(data => {

      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>(this.totalPages);
      this.produits = data;
    }, err => {
      console.log(err)
    })
  }

  onPageProduct(i) {
    this.page = i;

    this.chercherProduits();
  }
  onChercher(form: any) {
    this.page = 0;
    this.currentKeyword = form.keyword;
    this.chercherProduits();
  }
  chercherProduits() {
 this.catalogueService.getProduitsByKeyword(this.page, this.size, this.currentKeyword).subscribe(data => {

      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>(this.totalPages);
      this.produits = data;
    }, err => {
      console.log(err);
    })
  }
  onDeleteProduct(url) {
    console.log(url);
    this.catalogueService.deleteRessource(url).subscribe(data => {
      this.onGetProducts()

    }, err => {
      console.log(err);
    });
  }
}
