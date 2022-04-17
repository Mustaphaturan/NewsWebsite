import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }


  //newsapiUrl

  newsApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&apiKey=c077639e6a774cafa2219f1a95661062";
  //technewsapiurl
  techApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=c077639e6a774cafa2219f1a95661062";
  //businessapiurl
  businessApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=c077639e6a774cafa2219f1a95661062";
  //healthapiurl
  healthApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=c077639e6a774cafa2219f1a95661062";

  //topheading()

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //technews()
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  //businessnews()
  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
  //health ()
  healthNews(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
}
