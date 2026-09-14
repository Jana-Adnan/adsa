import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPost } from '../ipost';
import postsData from '../data/posts.json';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  allPosts: IPost[] = postsData.posts;
  featuredPosts: IPost[] = this.allPosts.filter((post) => post.featured).slice(0, 3);
  latestPosts: IPost[] = this.allPosts.filter((post) => !post.featured).slice(0, 3);

  categories = [
    { name: 'إضاءة', icon: 'fa-sun' },
    { name: 'بورتريه', icon: 'fa-user' },
    { name: 'مناظر طبيعية', icon: 'fa-mountain-sun' },
    { name: 'تقنيات', icon: 'fa-sliders' },
    { name: 'معدات', icon: 'fa-camera-retro' },
  ];

  getCategoryCount(categoryName: string): number {
    return this.allPosts.filter((post) => post.category === categoryName).length;
  }
}
