import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilesystemPage } from './filesystem.page';

describe('FilesystemPage', () => {
  let component: FilesystemPage;
  let fixture: ComponentFixture<FilesystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesystemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilesystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
