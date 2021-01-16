import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangePage } from './range.page';

describe('RangePage', () => {
  let component: RangePage;
  let fixture: ComponentFixture<RangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
