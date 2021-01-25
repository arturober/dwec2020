import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Navigation2Page } from './navigation2.page';

describe('Navigation2Page', () => {
  let component: Navigation2Page;
  let fixture: ComponentFixture<Navigation2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigation2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Navigation2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
