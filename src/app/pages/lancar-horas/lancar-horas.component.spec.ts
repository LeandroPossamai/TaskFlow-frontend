import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarHorasComponent } from './lancar-horas.component';

describe('LancarHorasComponent', () => {
  let component: LancarHorasComponent;
  let fixture: ComponentFixture<LancarHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancarHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancarHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
