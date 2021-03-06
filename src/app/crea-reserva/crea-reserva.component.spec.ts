import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaReservaComponent } from './crea-reserva.component';

describe('CreaReservaComponent', () => {
  let component: CreaReservaComponent;
  let fixture: ComponentFixture<CreaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
