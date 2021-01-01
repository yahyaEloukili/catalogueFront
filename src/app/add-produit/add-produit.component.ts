import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
  }
  onSaveProduit(form){
this.catalogueService.saveProduit(form.value).subscribe(data=>{
  console.log(data)
  form.reset();

},err=>{
  console.log(err)
})
form
      }

}
