import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    public productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => this.products = products);
  }

  delete(id: number): void {
    this.productsService.delete(id).subscribe(() => {
      this.productsService.getAll().subscribe(products => this.products = products);
    });
  }
}
