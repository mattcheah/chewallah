import { Component, OnInit, Input } from '@angular/core';
import { ArtPiece } from "../art-piece";

@Component({
  selector: 'app-display-piece-3d',
  templateUrl: './display-piece-3d.component.html',
  styleUrls: ['./display-piece-3d.component.scss']
})
export class DisplayPiece3dComponent implements OnInit {
  @Input() piece: ArtPiece;
  @Input() offset: string;


  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {

  }

  ngAfterViewInit() {
    let myPiece = this.piece;

    let container = <HTMLElement>document.querySelector("#" + myPiece.nameCode + " .display-piece-3d-pseudo");
    container.addEventListener('mousemove', function(e: any) {
      let position = e.offsetX/600;
      let angle = (position*52)-26;
      container.style.transform = "rotateY(" + angle + "deg)";
    });
  }

}
