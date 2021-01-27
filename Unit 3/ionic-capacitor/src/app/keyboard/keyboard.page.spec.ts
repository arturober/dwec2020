import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyboardPage } from './keyboard.page';

describe('KeyboardPage', () => {
  let component: KeyboardPage;
  let fixture: ComponentFixture<KeyboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
