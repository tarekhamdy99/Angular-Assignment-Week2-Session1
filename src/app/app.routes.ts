import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Task | Home Page' },
  { path: 'home', component: HomeComponent, title: 'Task | Home Page' },
  { path: 'about', component: AboutComponent, title: 'Task | About Page' },
  { path: 'contact', component: ContactComponent, title: 'Task | Contact Page' },
  {
    path: 'products',
    title: 'Task | All Products Page',
    loadComponent: () =>
      import('./components/products-api/products-api.component').then(
        (c) => c.ProductsAPIComponent,
      ),
  },
  {
    path: 'movies',
    title: 'Task | All Movies Page',
    loadComponent: () =>
      import('./components/movies-api/movies-api.component').then((c) => c.MoviesAPIComponent),
  },
];
