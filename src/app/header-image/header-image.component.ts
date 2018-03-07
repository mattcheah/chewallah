import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss']
})
export class HeaderImageComponent implements OnInit {
  @Input() title: string;
  @Input() backgroundImage: string;

  constructor() { }

  ngOnInit() {
  }

}
