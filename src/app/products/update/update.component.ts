import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductsService} from '../products.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product$?: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productsService.getById(parseInt(params.get('productId')!, 10)))
    );
  }

  updateProduct(id: number, product: Product): void {
    this.productsService.update(id, product).subscribe(product => {
      this.router.navigate(['products']);
    });
  }

}
