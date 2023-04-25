import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGptSearchComponent } from './chat-gpt-search.component';

describe('ChatGptSearchComponent', () => {
  let component: ChatGptSearchComponent;
  let fixture: ComponentFixture<ChatGptSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatGptSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatGptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
