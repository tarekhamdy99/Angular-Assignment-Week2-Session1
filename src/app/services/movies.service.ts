import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesAPI } from '../interfaces/MoviesAPI/movies-api.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient);

  ApiKey = '5b4dfe58355e7ea902e58e743e90dbae';

  getAllMovies(): Observable<MoviesAPI> {
    return this.httpClient.get<MoviesAPI>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${this.ApiKey}&language=en-US`,
    );
  }
}
