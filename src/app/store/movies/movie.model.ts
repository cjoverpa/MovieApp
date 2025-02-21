export interface Movie {
  id: number;
  title: string;
  overview: string;
}

export interface MovieState {
  movies: Movie[];
}
