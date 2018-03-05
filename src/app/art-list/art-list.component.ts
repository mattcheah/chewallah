import { Component, OnInit } from '@angular/core';
import { ArtPiece } from '../art-piece';
import { Pieces } from '../art-list';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent implements OnInit {
  artList: ArtPiece[] = Pieces;

  constructor() { }

  ngOnInit() {
  }

}
