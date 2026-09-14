import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { WildcardComponent } from './wildcard/wildcard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full', title: 'عدسه|عالم التصوير' },
  { path: 'home', component: HomeComponent, title: 'عدسه|عالم التصوير' },
  { path: 'about', component: AboutComponent, title: 'عدسه|عالم التصوير' },
  { path: 'blog', component: BlogComponent, title: 'عدسه|عالم التصوير' },
  { path: 'blog/:slug', component: BlogDetailsComponent, title: 'عدسه|عالم التصوير' },
  { path: '**', component: WildcardComponent, title: 'error 404' },
];
