import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaroComponent } from './camaro.component';

describe('CamaroComponent', () => {
  let component: CamaroComponent;
  let fixture: ComponentFixture<CamaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
