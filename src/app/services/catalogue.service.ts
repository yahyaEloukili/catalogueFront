import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host: string = "https://cataloguebackendd.herokuapp.com"
  constructor(private http: HttpClient, private loginService: LoginService) { }



  public getProduits(page: number, size: number) {
      return this.http.get(`${this.host}/produits?page=${page}&size=${size}`);
  }
  public saveProduit(produit) {
    return this.http.post(`${this.host}/produits`,produit);
}

  public getProduitsByKeyword(page: number, size: number, mc: string) {
    if (!mc) {
      return this.getProduits(page,size);
    }
    else {
      return this.http.get(`${this.host}/produits/search/byDesignationPage?mc=${mc}&page=${page}&size=${size}`);
    }
  }
  public deleteRessource(url) {
    return this.http.delete(url);
  }
}
