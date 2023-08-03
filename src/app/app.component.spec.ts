import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppModule} from "./app.module";
import {InputComponent} from "./components/input/input.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelectorAll('app-input').length).toEqual(2);
    expect(nativeElement.querySelectorAll('app-array-input').length).toEqual(1);
    expect(nativeElement.querySelectorAll('table').length).toEqual(1);
  });

  it('should have been call setWorker', () => {
    spyOn(component, 'setWorker');
    component.ngOnInit();
    expect(component.setWorker).toHaveBeenCalledWith(component.parameters.value);
  });

  it('should have been call setExtraIDs', () => {
    spyOn(component, 'setExtraIDs');
    component.ngOnInit();
    expect(component.setExtraIDs).toHaveBeenCalledWith(component.extraIds.value);
  });
});
