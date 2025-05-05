import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ViewportService } from '../../services/viewport/viewport.service';
@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private viewport = inject(ViewportService);

  isMobile = this.viewport.isMobile$();

  categories = ['Nuts', 'Dried fruits', 'Snacks', 'Offers'];
  selectedCategory = 'Nuts';
  searchQuery = '';

  products = [
    {
      name: 'Almonds',
      sizes: [
        { label: '1kg', price: 10, imageUrl: '/assets/almonds-1kg.png' },
        { label: '500g', price: 5, imageUrl: '/assets/almonds-500g.png' },
        { label: '200g', price: 2, imageUrl: '/assets/almonds-200g.png' },
      ],
    },
    // ... repeat
  ];

  get filteredProducts() {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    // Optionally filter products by category here
  }
}
