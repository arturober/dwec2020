import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkeletonPage } from './skeleton.page';

describe('SkeletonPage', () => {
  let component: SkeletonPage;
  let fixture: ComponentFixture<SkeletonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
