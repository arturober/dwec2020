import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolbarPage } from './toolbar.page';

describe('ToolbarPage', () => {
  let component: ToolbarPage;
  let fixture: ComponentFixture<ToolbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
