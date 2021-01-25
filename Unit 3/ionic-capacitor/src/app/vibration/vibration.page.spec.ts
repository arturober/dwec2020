import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VibrationPage } from './vibration.page';

describe('VibrationPage', () => {
  let component: VibrationPage;
  let fixture: ComponentFixture<VibrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VibrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VibrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
