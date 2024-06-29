import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
   categories = [
    { id: 1, name: 'Electronics', description: 'Devices, gadgets and more' },
    { id: 2, name: 'Books', description: 'Various genres of books' },
    { id: 3, name: 'Clothing', description: 'Men and Women Clothing' },
    { id: 4, name: 'Sports', description: 'Sports equipment and accessories' },
    { id: 5, name: 'Home & Kitchen', description: 'Appliances, furniture and more' },
    { id: 6, name: 'Toys & Games', description: 'Toys, games and puzzles for all ages' },
    { id: 7, name: 'Beauty & Health', description: 'Beauty products and health supplements' },
    { id: 8, name: 'Automotive', description: 'Car accessories and automotive parts' },
    { id: 9, name: 'Garden & Outdoors', description: 'Gardening tools and outdoor equipment' },
    { id: 10, name: 'Pet Supplies', description: 'Products for pets and pet care' }
  ];

}
