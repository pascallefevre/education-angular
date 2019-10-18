import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfComponent } from './show-prof.component';

describe('ShowProfComponent', () => {
  let component: ShowProfComponent;
  let fixture: ComponentFixture<ShowProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
