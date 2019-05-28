import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaProductoComponent } from './modifica-producto.component';

describe('ModificaProductoComponent', () => {
  let component: ModificaProductoComponent;
  let fixture: ComponentFixture<ModificaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
