import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPiece3dComponent } from './display-piece-3d.component';

describe('DisplayPiece3dComponent', () => {
  let component: DisplayPiece3dComponent;
  let fixture: ComponentFixture<DisplayPiece3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayPiece3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPiece3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
