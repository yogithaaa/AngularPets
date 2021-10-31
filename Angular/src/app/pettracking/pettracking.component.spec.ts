import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettrackingComponent } from './pettracking.component';

describe('PettrackingComponent', () => {
  let component: PettrackingComponent;
  let fixture: ComponentFixture<PettrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
