
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotesListViewPresenter } from './quotes-list-view.presenter';

describe('QuotesListViewPresenter', () => {
  let component: QuotesListViewPresenter;
  let fixture: ComponentFixture<QuotesListViewPresenter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesListViewPresenter]
    });
    fixture = TestBed.createComponent(QuotesListViewPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
