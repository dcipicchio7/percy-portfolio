import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
