import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IPost } from '../ipost';
import postsData from '../data/posts.json';
@Component({
  selector: 'app-blog',
  imports: [FormsModule, RouterLink],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  allPosts: IPost[] = postsData.posts;
  categories: string[] = ['جميع المقالات', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];
  searchTerm: string = '';
  selectedCategory: string = 'جميع المقالات';
  viewMode: 'grid' | 'list' = 'grid';
  currentPage: number = 1;
  postsPerPage: number = 6;
  totalPages: number = 1;
  filteredPosts: IPost[] = postsData.posts;
  paginatedPosts: IPost[] = postsData.posts.slice(0, 6);
  pageNumbers: number[] = [1];
  updateData(): void {
    this.filteredPosts = this.allPosts.filter((post) => {
      const matchCat =
        this.selectedCategory === 'جميع المقالات' || post.category === this.selectedCategory;
      const matchSearch =
        post.title.includes(this.searchTerm) || post.excerpt.includes(this.searchTerm);
      return matchCat && matchSearch;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredPosts.length / this.postsPerPage));
    const start = (this.currentPage - 1) * this.postsPerPage;
    this.paginatedPosts = this.filteredPosts.slice(start, start + this.postsPerPage);
    this.pageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
  }
  onSearch(): void {
    this.currentPage = 1;
    this.updateData();
  }
  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updateData();
  }
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateData();
    }
  }
}
