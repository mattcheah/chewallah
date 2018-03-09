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


    // slider.addEventListener('change', function (e) {
    //   let rotater = document.querySelector("#" + this.piece.nameCode + " .art-piece-pseudo");
    //   let value = slider.value;
    //   console.log(value);
    // });
  }

  ngAfterViewInit() {
    let myPiece = this.piece;

    let slider = document.getElementById('slider-' + myPiece.nameCode);
    console.log('slider-' + myPiece.nameCode);
    console.log(slider);

    slider.addEventListener('change', function (e) {
      let rotater = document.querySelector("#" + myPiece.nameCode + " .art-piece-pseudo");
      let value = slider.value;
      rotater.style.transform = "rotateY("+(value-90)+"deg)";
    });
  }

}
