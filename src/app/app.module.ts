import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ArtListComponent } from './art-list/art-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { ArtPieceComponent } from './art-piece/art-piece.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtListComponent,
    HomepageComponent,
    HeroImageComponent,
    HeaderImageComponent,
    ArtPieceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
