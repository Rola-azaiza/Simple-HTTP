import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Post} from './models/Post';
import {catchError, map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    @Inject('API_URL') private apiURL: string, private http: HttpClient) { }


  getPosts() {
   // return this.http.get<Post[]>(this.apiURL);
    return this.http.get(`${this.apiURL}/posts`);
  }
}
