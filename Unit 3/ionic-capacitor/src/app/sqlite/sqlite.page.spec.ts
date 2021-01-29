import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SqlitePage } from './sqlite.page';

describe('SqlitePage', () => {
  let component: SqlitePage;
  let fixture: ComponentFixture<SqlitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SqlitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
