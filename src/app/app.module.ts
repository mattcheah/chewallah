import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ArtListComponent } from './art-list/art-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { DisplayPiece3dComponent } from './display-piece-3d/display-piece-3d.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtListComponent,
    HomepageComponent,
    HeroImageComponent,
    HeaderImageComponent,
    DisplayPiece3dComponent,
    AboutComponent,
    NavComponent,
    PageHeaderComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
