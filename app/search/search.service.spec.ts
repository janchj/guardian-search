import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { SearchService } from './'

describe('SearchService', () => {

  it('should have name property set', inject([SearchService], (testService: SearchService) => {
    expect(testService).toBe('Mocked Service');
  }));

});