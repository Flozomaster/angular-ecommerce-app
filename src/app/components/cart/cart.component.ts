import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
})

export class CartComponent {
    cartItems = [
        { id: 1, name: 'Product 1', price: 100, quantity: 2 },
        { id: 2, name: 'Product 2', price: 200, quantity: 1 },
    ];
}