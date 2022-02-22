import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnComponent } from './cpn.component';

describe('CpnComponent', () => {
  let component: CpnComponent;
  let fixture: ComponentFixture<CpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
