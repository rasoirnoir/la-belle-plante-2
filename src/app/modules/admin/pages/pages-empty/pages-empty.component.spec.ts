import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEmptyComponent } from './pages-empty.component';

describe('PagesEmptyComponent', () => {
  let component: PagesEmptyComponent;
  let fixture: ComponentFixture<PagesEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
