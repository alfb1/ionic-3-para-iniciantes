import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListPopular, Movie } from '../movie/movie.model';
import { API_KEY, URL} from '../api.api';
import { HttpImageConfig } from '../images-moviedb/httpImageConfig.model';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  // https://api.themoviedb.org/3/movie/configuration?api_key=844f4d7af4a8232012a2e3439135fbac
  // https://api.themoviedb.org/3/configuration?api_key=844f4d7af4a8232012a2e3439135fbac
  getLatestMovie(page=1):Observable<ListPopular>{
    return this.http.get<ListPopular>(`${URL}movie/popular?page=${page}&api_key=${API_KEY}`);
  }

  getConfigInfo():Observable<HttpImageConfig>{
    return this.http.get<HttpImageConfig>(`${URL}configuration?api_key=${API_KEY}`);
  }

  getMovieDetail(movieId:string):Observable<Movie>{
    return this.http.get<Movie>(`${URL}movie/${movieId}?api_key=${API_KEY}`);   
  }
}
