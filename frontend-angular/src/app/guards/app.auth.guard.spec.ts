import { TestBed, async, inject } from '@angular/core/testing';

import { App.AuthGuard } from './app.auth.guard';

describe('App.AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [App.AuthGuard]
    });
  });

  it('should ...', inject([App.AuthGuard], (guard: App.AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
