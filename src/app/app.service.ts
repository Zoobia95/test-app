import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  findPosts(): any {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }

  getUserDetals(): any {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .toPromise();
  }

  getComments(): any {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .toPromise();
  }
}
