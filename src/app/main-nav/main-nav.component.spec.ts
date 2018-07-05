
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TitleBarComponent } from './title-bar.component';

describe('TitleBarComponent', () => {
  let component: TitleBarComponent;
  let fixture: ComponentFixture<TitleBarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TitleBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
