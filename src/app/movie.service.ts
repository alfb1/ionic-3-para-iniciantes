import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmesDB   } from './filmesDb.model';
import { Observable } from 'rxjs';

const MOVIE_API = 'https://api.themoviedb.org/3/movie';
const MOVIE_API_KEY = 'api_key=844f4d7af4a8232012a2e3439135fbac';


@Injectable({
  providedIn: 'root'
})

/*

API Key (v3 auth)
844f4d7af4a8232012a2e3439135fbac
Example API Request
https://api.themoviedb.org/3/movie/550?api_key=844f4d7af4a8232012a2e3439135fbac
API Read Access Token (v4 auth)

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRmNGQ3YWY0YTgyMzIwMTJhMmUzNDM5MTM1ZmJhYyIsInN1YiI6IjVkOGM3OGE1MTcyZDdmMDAxZjUxZjBlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NpSreIwruypH4O-qHPMKhfc_9Xc7PNqHBAeemH-13lE

*/


export class MovieService {

  constructor(
    private http : HttpClient
  ) { }

  getLatest(){
    return this.http.get(`${MOVIE_API}/latest?${MOVIE_API_KEY}`);
  }

  getPopular():Observable<FilmesDB>{
    return this.http.get<FilmesDB>(`${MOVIE_API}/popular?${MOVIE_API_KEY}`);
  }
}
