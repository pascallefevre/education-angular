import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyClasseComponent } from './modify-classe.component';

describe('ModifyClasseComponent', () => {
  let component: ModifyClasseComponent;
  let fixture: ComponentFixture<ModifyClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
