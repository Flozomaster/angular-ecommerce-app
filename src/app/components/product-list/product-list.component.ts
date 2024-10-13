import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})

export class ProductlistComponent {
    imageUrl: string | undefined;
    productId: number;
    product: any;

    products = [
        { id: 1, name: 'Product 1', price: 100, imageUrl:'' },
        { id: 2, name: 'Product 2', price: 200, imageUrl:'' },
        { id: 3, name: 'Product 3', price: 300, imageUrl:'' },
    ];

    constructor(private route: ActivatedRoute) {
        this.productId = this.route.snapshot.params['id'];
        this.product = this.products.find(p => p.id === +this.productId);
    }
}