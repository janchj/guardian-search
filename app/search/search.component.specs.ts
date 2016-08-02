import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { SearchComponent } from './';

beforeEachProviders(() => [SearchComponent]);

describe('SearchComponent', () => {
  it('should have an instance',
      inject([SearchComponent], (app: SearchComponent) => {
    expect(app).toBeTruthy();
  }));
}); 