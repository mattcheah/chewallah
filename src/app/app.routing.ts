import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
