import { NgModule } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { StoreModule } from '@ngrx/store';
import { _movieReducer, MOVIE_STATE } from './movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effect';
import { MovieFacade } from './movie.facade';

@NgModule({
  providers: [MovieService, MovieFacade],
  imports: [
    StoreModule.forFeature(MOVIE_STATE, _movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MovieStateModule {}
