import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// guarding api config
const config = {
   GUARDIAN_API_KEY : 'e457fa50-b903-4344-9f29-b805d5f119cb',
   GUARDIAN_API_URL : 'https://content.guardianapis.com',
   ORDER_BY : 'relevance'
};

@Injectable()
export class SearchService {
  constructor(private _http: Http) { }

  // fetch results from external source
  fetchResults(url : string) {
    return this._http.get(url)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); // logging
        return Promise.reject(err);
      });
  }

  // get results by keyword
  getResultsByKeywords(keywords : string, pageSize : Number, pageNumber : Number){
    var queryUrl = config.GUARDIAN_API_URL + `/search?api-key=${config.GUARDIAN_API_KEY}&show-fields=trail-text&order-by=${config.ORDER_BY}&q=${keywords}&page-size=${pageSize}&page=${pageNumber}`;
    return this.fetchResults(queryUrl);
  }
}