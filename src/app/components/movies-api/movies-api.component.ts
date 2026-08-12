import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MoviesData } from '../../interfaces/MoviesAPI/movies-api.interface';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-api',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './movies-api.component.html',
  styleUrl: './movies-api.component.css',
})
export class MoviesAPIComponent implements OnInit, OnDestroy {
  private readonly moviesDataAPI = inject(MoviesService);

  moviesData: MoviesData = [];

  refMoviesSub$!: Subscription;

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngOnDestroy(): void {
    this.refMoviesSub$.unsubscribe();
    console.log('Movies Data Was Deleted');
  }

  getAllMovies() {
    this.refMoviesSub$ = this.moviesDataAPI.getAllMovies().subscribe({
      next: (response) => {
        this.moviesData = response.results;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('All Data Rendered Successfully');
      },
    });
  }
}
