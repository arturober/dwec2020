import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabsPage } from './fabs.page';

describe('FabsPage', () => {
  let component: FabsPage;
  let fixture: ComponentFixture<FabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
