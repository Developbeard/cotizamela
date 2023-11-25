
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotesListViewComponent } from './quotes-list-view.component';

describe('QuotesList', () => {
  let component: QuotesListViewComponent;
  let fixture: ComponentFixture<QuotesListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesListViewComponent]
    });
    fixture = TestBed.createComponent(QuotesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
