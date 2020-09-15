import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeDatailPage } from './filme-datail.page';

describe('FilmeDatailPage', () => {
  let component: FilmeDatailPage;
  let fixture: ComponentFixture<FilmeDatailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDatailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeDatailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
