import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesComponent } from '../movies/movies.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovies(url: string){
    //return this.http.get(url);
    return this.http.get<MoviesComponent[]>(url);
  }
  
}
