import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Navigation1Page } from './navigation1.page';

describe('Navigation1Page', () => {
  let component: Navigation1Page;
  let fixture: ComponentFixture<Navigation1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigation1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
