import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesPage } from './references-page';

describe('ReferencesPage', () => {
  let component: ReferencesPage;
  let fixture: ComponentFixture<ReferencesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
