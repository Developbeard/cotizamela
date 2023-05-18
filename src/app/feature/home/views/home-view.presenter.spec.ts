
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeViewPresenter } from './home-view.presenter';

describe('HomeViewPresenter', () => {
  let component: HomeViewPresenter;
  let fixture: ComponentFixture<HomeViewPresenter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeViewPresenter]
    });
    fixture = TestBed.createComponent(HomeViewPresenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
