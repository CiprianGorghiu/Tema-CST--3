import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListComponentComponent } from './my-list-component.component';

describe('MyListComponentComponent', () => {
  let component: MyListComponentComponent;
  let fixture: ComponentFixture<MyListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
