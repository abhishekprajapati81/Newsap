import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private http:HttpClient) { }

  // top headline
  newapi = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a3da212c2c94405ab26033d58546728f"

  // teach news
  teacnews = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a3da212c2c94405ab26033d58546728f"

  // sports news
  spornews = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a3da212c2c94405ab26033d58546728f"

  // Apple news

  applenews ="https://newsapi.org/v2/everything?q=apple&from=2023-08-24&to=2023-08-24&sortBy=popularity&apiKey=a3da212c2c94405ab26033d58546728f"

  // politics
politics = "https://newsapi.org/v2/top-headlines?country=uk&category=business&apiKey=a3da212c2c94405ab26033d58546728f"
  

// politics

politicss():Observable<any>
{
  return this.http.get(this.politics)
}

// APPLE NEWS
  applenewss():Observable<any>
  {
  return this.http.get(this.applenews)
  }

  // top heding
  topheding():Observable<any>
  {
    return this.http.get(this.newapi);
  }

  //teachnews

  teachnews():Observable<any>
  {
    return this.http.get(this.teacnews);
  }


  // sport news

  sportnew():Observable<any>
  {
    return this.http.get(this.spornews);
  }
}
