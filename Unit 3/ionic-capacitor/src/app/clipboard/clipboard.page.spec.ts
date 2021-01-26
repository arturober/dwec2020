import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClipboardPage } from './clipboard.page';

describe('ClipboardPage', () => {
  let component: ClipboardPage;
  let fixture: ComponentFixture<ClipboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClipboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
