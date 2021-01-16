import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgesPage } from './badges.page';

describe('BadgesPage', () => {
  let component: BadgesPage;
  let fixture: ComponentFixture<BadgesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
