import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCheckboxListComponent } from './question-checkbox-list.component';

describe('QuestionCheckboxListComponent', () => {
  let component: QuestionCheckboxListComponent;
  let fixture: ComponentFixture<QuestionCheckboxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCheckboxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
