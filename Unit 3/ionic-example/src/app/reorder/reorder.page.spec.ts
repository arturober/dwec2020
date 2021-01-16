import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReorderPage } from './reorder.page';

describe('ReorderPage', () => {
  let component: ReorderPage;
  let fixture: ComponentFixture<ReorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
