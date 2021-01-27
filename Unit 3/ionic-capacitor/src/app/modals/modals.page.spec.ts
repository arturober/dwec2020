import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalsPage } from './modals.page';

describe('ModalsPage', () => {
  let component: ModalsPage;
  let fixture: ComponentFixture<ModalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
