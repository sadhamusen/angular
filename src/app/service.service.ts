import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, concatMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  edit(formGroup: FormGroup, id: string) {
    return this.http
      .put(
        `https://648a951417f1536d65e94e7c.mockapi.io/movies/${id}`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  getMovies() {
    return this.http
      .get('https://648a951417f1536d65e94e7c.mockapi.io/movies')
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  filtersearch(event: any) {
    this.http
      .get(`https://648a951417f1536d65e94e7c.mockapi.io/movies/`)
      .pipe(tap(event));
    return this.http
      .get(`https://648a951417f1536d65e94e7c.mockapi.io/movies/`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  getMoviesByid(id: string) {
    return this.http
      .get(`https://648a951417f1536d65e94e7c.mockapi.io/movies/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  addMovie(formGroup: FormGroup) {
    console.log(formGroup.value);

    return this.http
      .post(
        `https://648a951417f1536d65e94e7c.mockapi.io/movies`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }
  deleteMovie(id: string) {
    console.log('Delete', id);
    return this.http
      .delete(`https://648a951417f1536d65e94e7c.mockapi.io/movies/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        }),
        concatMap(() => this.getMovies())
      );
  }
}
