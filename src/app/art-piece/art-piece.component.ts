import { Component, OnInit, Input } from '@angular/core';
import { ArtPiece } from "../art-piece";

@Component({
  selector: 'app-art-piece',
  templateUrl: './art-piece.component.html',
  styleUrls: ['./art-piece.component.scss']
})
export class ArtPieceComponent implements OnInit {
  @Input() piece: ArtPiece;
  @Input() offset: string;


  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    let myPiece = this.piece;

    let container = document.querySelector("#" + myPiece.nameCode + " .art-piece-pseudo");
    container.addEventListener('mousemove', function(e) {
      let position = e.offsetX/600;
      let angle = (position*52)-26;
      container.style.transform = "rotateY(" + angle + "deg)";
    });
  }

}
