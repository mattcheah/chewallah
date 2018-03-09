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

}
