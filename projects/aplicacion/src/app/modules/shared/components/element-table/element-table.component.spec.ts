import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTableComponent } from './element-table.component';

describe('ElementTableComponent', () => {
  let component: ElementTableComponent;
  let fixture: ComponentFixture<ElementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
