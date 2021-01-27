import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivingDirectionsPage } from './driving-directions.page';

describe('DrivingDirectionsPage', () => {
  let component: DrivingDirectionsPage;
  let fixture: ComponentFixture<DrivingDirectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingDirectionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivingDirectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
