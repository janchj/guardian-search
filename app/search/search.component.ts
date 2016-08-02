import { Component, Input, Output } from '@angular/core';
import * as _ from 'lodash';

import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import { SimpleNotificationsComponent, NotificationsService } from 'angular2-notifications';

import { SearchService } from './search.service';
import { TrailTextPipe } from './trailtext-pipe';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  providers: [PaginationService, NotificationsService],
  directives: [PaginationControlsCmp, SimpleNotificationsComponent],
  pipes: [PaginatePipe, TrailTextPipe]
})

export class SearchComponent {

  // pagination config
  public directionLinks: boolean = false;
  public autoHide: boolean = true;
  public config: IPaginationInstance = {
    id: 'advanced',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  // notification config
  public notificationOptions = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true
  };

  // models
  @Input() keywords: string;
  @Output() results: any[];

  constructor(private _searchService: SearchService,
    private _notificationService: NotificationsService) { }

  // run search based on customer's keyword(s)
  search() {
    this._searchService.getResultsByKeywords(this.keywords, this.config.itemsPerPage, this.config.currentPage)
      .then((results) => {

        // if status ok, then get the results
        if (results.response.status === 'ok') {

          // if no results, show message to user
          if (results.response.total > 0) {
            this.results = results.response.results;
            this.config.totalItems = results.response.pages;
          } else {
            this.handleInfo('Sorry! no articles match your search. Maybe try a different set of keywords?')
          }


        }
      })
      .catch((err) => {
        this.handleError(err); // logging

      })
  }

  // page number changed
  onPageChange(number: number) {

    // update page pointer
    this.config.currentPage = number;

    // refresh results after selecting a new page
    this.search();
  }

  extractAttributesFromResponse(response: any) {
    var objB = _.map(response, ['webUrl', 'webTitle', 'sectionName']);
    console.log(objB);
  }

  // handle errors and show a message to user
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // logging
    return this._notificationService.info('Ooops!', errMsg); // show user friendly message
  }

  // handle errors and show a message to user
  private handleInfo(info: any) {
    //console.error(info); // logging?
    return this._notificationService.info('Ooops!', info); // show user friendly message
  }

}