import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'App home page'
  },
  {
    path: 'About',
    component: AboutComponent,
    title: 'App About page'
  },
  {
    path: 'Contact',
    component: ContactComponent,
    title: 'App Contact page'
  }
];
