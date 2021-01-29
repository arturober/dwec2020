import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlashlightPage } from './flashlight.page';

describe('FlashlightPage', () => {
  let component: FlashlightPage;
  let fixture: ComponentFixture<FlashlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlashlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
