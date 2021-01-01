import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from "./services/route-guard.service";
import { RouteGuardAdminService } from "./services/route-guard-admin.service";
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
const routes: Routes = [
  { path: "produits", component: ProduitsComponent},
  { path: "", component: HomeComponent},
  { path: "addProduit", component: AddProduitComponent},
  { path: "createEmployee", component: CreateEmployeeComponent},
  { path: "login", component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
