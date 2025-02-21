import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getMovieError, getMovieLoading, getMovies } from './movie.selectors';
import { LoadMovies } from './movie.actions';

@Injectable()
export class MovieFacade {
  private readonly store = inject(Store);

  movies$ = this.store.pipe(select(getMovies));
  movieLoading$ = this.store.pipe(select(getMovieLoading));
  movieError$ = this.store.pipe(select(getMovieError));

  loadMovies(): void {
    this.store.dispatch(LoadMovies.load());
  }
}
