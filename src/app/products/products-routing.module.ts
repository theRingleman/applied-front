import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DetailsComponent} from './details/details.component';
import {UpdateComponent} from './update/update.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  // { path: 'products', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: IndexComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/:productId', component: DetailsComponent },
  { path: 'products/update/:productId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
