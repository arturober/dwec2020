import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefresherPage } from './refresher.page';

describe('RefresherPage', () => {
  let component: RefresherPage;
  let fixture: ComponentFixture<RefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefresherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
