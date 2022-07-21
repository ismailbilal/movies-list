import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  response: Response = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  constructor(private http: HttpClient) {}

  getMoviesList() {
    return this.http.get<Response>('/assets/movies.json');
  }
}
