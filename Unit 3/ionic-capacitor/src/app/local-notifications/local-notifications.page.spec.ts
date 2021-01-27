import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalNotificationsPage } from './local-notifications.page';

describe('LocalNotificationsPage', () => {
  let component: LocalNotificationsPage;
  let fixture: ComponentFixture<LocalNotificationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalNotificationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalNotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
