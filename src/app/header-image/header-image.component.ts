import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss']
})

export class HeaderImageComponent implements OnInit {
  @Input() title: string;
  @Input() backgroundImage: string;
  @Input() offsetY: any;

  constructor() { }

  startingPos: number;
  item: any;

  ngOnInit() {
  }

  ngAfterViewInit()	{
    this.item = document.querySelector('#header-' + this.backgroundImage + ' .header-image');

    let computedY = window.getComputedStyle(this.item).backgroundPositionY;
    this.offsetY = this.convertToNum(this.offsetY);
    this.startingPos = this.convertToNum(computedY);
    console.log(this.startingPos);
    window.addEventListener('scroll', this.parallax);
  }

  parallax = (): void => {
    if (window.outerWidth > 750) {

      let scrollPos = window.pageYOffset;
      this.item.style.backgroundPositionY = (scrollPos * .15) +this.startingPos - this.offsetY + "px";
    }
  }

  convertToNum = (unit: string): number => {
    return parseInt(unit.replace("px", "").replace("%", ""));
  }

}
