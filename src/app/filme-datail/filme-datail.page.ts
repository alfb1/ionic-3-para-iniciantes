import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../api/movie.service';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-filme-datail',
  templateUrl: './filme-datail.page.html',
  styleUrls: ['./filme-datail.page.scss'],
})
export class FilmeDatailPage implements OnInit {
  filme : Movie;
  id    : string ;
  filmeImgUrl:string;
  filmeImgBackDrop:string;

  constructor(
    private route: ActivatedRoute,
    private service: MovieService,
    private cfgService: ConfigService,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id);
      this.getMovieDetail();
    });

    let configParams = this.cfgService.getConfig();
    if (
      configParams.filmeImgBackDrop != undefined &&
      configParams.filmeImgUrl != undefined
    ) {
      this.filmeImgUrl = configParams.filmeImgUrl;
      this.filmeImgBackDrop = configParams.filmeImgBackDrop
    } 
  }

  getMovieDetail(){
    this.service.getMovieDetail(this.id).subscribe(
      movie => this.filme = movie
    )
  }

}
