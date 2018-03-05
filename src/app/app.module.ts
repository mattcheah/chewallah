import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtListComponent } from './art-list/art-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroImageComponent } from './hero-image/hero-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtListComponent,
    HomepageComponent,
    HeroImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
