import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatindexComponent } from './chatindex.component';

describe('ChatindexComponent', () => {
  let component: ChatindexComponent;
  let fixture: ComponentFixture<ChatindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
