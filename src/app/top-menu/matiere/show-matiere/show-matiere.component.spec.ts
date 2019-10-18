import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatiereComponent } from './show-matiere.component';

describe('ShowMatiereComponent', () => {
  let component: ShowMatiereComponent;
  let fixture: ComponentFixture<ShowMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
