import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMatiereComponent } from './modify-matiere.component';

describe('ModifyMatiereComponent', () => {
  let component: ModifyMatiereComponent;
  let fixture: ComponentFixture<ModifyMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
