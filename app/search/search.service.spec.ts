import { describe, expect, inject, async, it, addProviders, afterEach, beforeEach, beforeEachProviders } from '@angular/core/testing';

import { SearchService } from './index'

describe('SearchService Injected', () => {

  beforeEach(() => {
    addProviders([SearchService])
  });

  it('should have an instance', inject([SearchService], (searchService: SearchService) => {
    expect(searchService).not.toBe(null);
  }));

});