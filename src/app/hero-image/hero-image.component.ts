import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll',this.parallax);
  }

  parallax = ():void => {
    let scrollPos = window.pageYOffset;
    if (scrollPos <= 920) {
      let image = document.getElementById("hero-image-container");
      image.style.backgroundPositionY = (scrollPos *.4) + "px";
    }
  }

}
