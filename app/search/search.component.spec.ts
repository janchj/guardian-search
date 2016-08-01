/* tslint:disable:no-unused-variable */

import { describe, expect, inject, async, it, addProviders, afterEach, beforeEach, beforeEachProviders } from '@angular/core/testing';
import { provide } from '@angular/core';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SearchComponent, SearchService } from "./";

class MockSearchService extends SearchService {
}

beforeEach(() => {
  addProviders([{ provide: SearchService, useClass: MockSearchService }]);
});

describe('SearchComponent', () => {

  it('should have an instance of SearchService', inject([SearchService], (testService: SearchService) => {
    expect(testService).not.toBe(null);
  }));
/*
    it('should render results', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(ListComponent).then(componentFixture => {
      const element = componentFixture.nativeElement;
      componentFixture.componentInstance.users = ['John'];
      componentFixture.detectChanges();
      expect(element.querySelectorAll('span').length).toBe(1);
    });
  }));
*/

  it('should have results when performing a valid search', function () { 



  });


  /*
    it('should have an instance', () => {
      expect(searchComponent).toBe(1);
    });
  
    it('should show a message when performing an invalid search', function () {
      searchComponent.keywords = "britain";
      searchComponent.search();
      expect(searchComponent.results.length).toBeGreaterThan(1);
    });*/

  it('should have results when performing a valid search', function () { });
  it('should paginate results', function () { });
  it('should display title, summary, section and a valid url', function () { });

});

