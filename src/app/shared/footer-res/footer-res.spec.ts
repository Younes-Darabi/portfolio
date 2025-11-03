import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRes } from './footer-res';

describe('FooterRes', () => {
  let component: FooterRes;
  let fixture: ComponentFixture<FooterRes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterRes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
