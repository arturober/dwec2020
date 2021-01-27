import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkPage } from './network.page';

describe('NetworkPage', () => {
  let component: NetworkPage;
  let fixture: ComponentFixture<NetworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
