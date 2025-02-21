import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieState } from './store/movies/movie.model';
import { MovieService } from '../shared/services/movie.service';
import { loadMoviesSuccess } from './store/movies/movie.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private movieService = inject(MovieService);
  movies$: Observable<any>;

  constructor(private store: Store<{movies: MovieState}>){
    this.movies$ = this.store.select(state => state.movies.movies)
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: response => this.store.dispatch(loadMoviesSuccess({movies: response.results})),
      error: error => console.log(error)
    });
  }

}
