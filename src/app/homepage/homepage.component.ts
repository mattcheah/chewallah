import { Component, OnInit } from '@angular/core';
import { Pieces } from '../art-list';
import { ArtPiece } from '../art-piece';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.startParallax);
  }

  pieces: ArtPiece[] = Pieces;

  startParallax = (): void => {
    var scrollPos = window.pageYOffset;
    this.parallax('hero-image-container', scrollPos, -32);
    this.parallax('mountain-lake', scrollPos, 850);
    this.parallax('quiet-afternoon', scrollPos, 350);
  }

  parallax = (id: string, scrollPos: number, startingPos = 0): void => {
    let item = document.getElementById(id);
    item.style.backgroundPositionY = (scrollPos * .15) + startingPos + "px";
  }

}
