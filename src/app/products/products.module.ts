import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [IndexComponent, DetailsComponent, UpdateComponent, DeleteComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
