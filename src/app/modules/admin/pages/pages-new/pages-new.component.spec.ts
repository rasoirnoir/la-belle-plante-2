import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesNewComponent } from './pages-new.component';

describe('PagesNewComponent', () => {
  let component: PagesNewComponent;
  let fixture: ComponentFixture<PagesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
