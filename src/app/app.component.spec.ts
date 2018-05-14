import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Enums } from '../Enums/enums';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should get enum values from A', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.A).toBe(Enums.A.a);
  }));
  it('should get enum values from B', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.B).toBe(Enums.B.a);
  }));

});
