import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFrontendComponent } from './aside-frontend.component';

describe('AsideFrontendComponent', () => {
  let component: AsideFrontendComponent;
  let fixture: ComponentFixture<AsideFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
