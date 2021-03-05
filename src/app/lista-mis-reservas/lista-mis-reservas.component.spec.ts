import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMisReservasComponent } from './lista-mis-reservas.component';

describe('ListaMisReservasComponent', () => {
  let component: ListaMisReservasComponent;
  let fixture: ComponentFixture<ListaMisReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMisReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMisReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
