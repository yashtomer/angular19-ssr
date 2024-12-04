import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSsrComponent } from './angular-ssr.component';

describe('AngularSsrComponent', () => {
  let component: AngularSsrComponent;
  let fixture: ComponentFixture<AngularSsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularSsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
