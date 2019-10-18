import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClasseComponent } from './show-classe.component';

describe('ShowClasseComponent', () => {
  let component: ShowClasseComponent;
  let fixture: ComponentFixture<ShowClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
