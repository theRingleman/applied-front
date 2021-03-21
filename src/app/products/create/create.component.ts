import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../products.service';
import {Product} from '../product';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {id: 0, name: '', description: '', price: 0};
  createForm = this.formBuilder.group({
    name: '',
    description: '',
    price: 0
  });

  ngOnInit(): void {}

  constructor(
    private router: Router,
    public productService: ProductsService,
    public formBuilder: FormBuilder
  ){
  }

  onSubmit(): void {
    console.log(this.createForm.value);
    this.productService.create(this.createForm.value).subscribe(product => {
      console.log(product);
    });
    this.createForm.reset();
    this.router.navigate(['products']);
  }
}
