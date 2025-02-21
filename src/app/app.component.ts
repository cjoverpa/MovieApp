import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieFacade } from './store/movies/movie.facade';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  providers: [MovieFacade],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly movieFacade = inject(MovieFacade);

  movies$: Observable<any> = this.movieFacade.movies$;

  ngOnInit(): void {
    // this.movieService.getMovies().subscribe({
    //   next: (response) => this.movieFacade.loadMovies(response.results),
    //   error: (error) => console.log(error),
    // });
    this.movieFacade.loadMovies();
    // this.movies$.subscribe(console.log);
  }
}
