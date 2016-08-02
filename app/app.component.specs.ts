import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App', () => {
  it('should have an instance',
      inject([AppComponent], (app: AppComponent) => {
    //expect(app).toBeTruthy();
    expect(app).toBe(1); 
  }));
}); 