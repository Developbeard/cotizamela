
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteViewPresenter } from './quote-view.presenter';

describe('QuoteViewPresenter', () => {
  let component: QuoteViewPresenter;
  let fixture: ComponentFixture<QuoteViewPresenter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteViewPresenter]
    });
    fixture = TestBed.createComponent(QuoteViewPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
