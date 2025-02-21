import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private apiKey = environment.movieApiKey;
  private baseURL = 'https://api.themoviedb.org/3';

  constructor() {}

  getMovies(): Observable<any> {
    debugger;
    return this.http.get(
      `${this.baseURL}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=1`,
    );
  }
}
