import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotionPage } from './motion.page';

describe('MotionPage', () => {
  let component: MotionPage;
  let fixture: ComponentFixture<MotionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
