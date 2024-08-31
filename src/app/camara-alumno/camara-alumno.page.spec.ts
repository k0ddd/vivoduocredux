import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraAlumnoPage } from './camara-alumno.page';

describe('CamaraAlumnoPage', () => {
  let component: CamaraAlumnoPage;
  let fixture: ComponentFixture<CamaraAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
