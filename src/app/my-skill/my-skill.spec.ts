import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkill } from './my-skill';

describe('MySkill', () => {
  let component: MySkill;
  let fixture: ComponentFixture<MySkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
