import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api/movie.service';
import { Popular, ListPopular } from '../movie/movie.model';
import { HttpImageConfig } from '../images-moviedb/httpImageConfig.model';
import { ConfigParams } from '../config/config.model';
import { LoadingController, NavController } from '@ionic/angular';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  configParams: ConfigParams;
  loading: any;
  listPopular: ListPopular;
  filmes: Popular[] = [];
  httpImageConfig: HttpImageConfig;
  filmeImgUrl: string = "";
  filmeImgBackDrop: string = "";
  public refresher: any;
  public isRefreshing: boolean = false;
  public pageNumber = 1 ;
  public infiniteScrooll;

  constructor(private service: MovieService,
    private cfgService: ConfigService,
    private loadCtrl: LoadingController,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.configParams = this.cfgService.getConfig();
  }

  ionViewDidEnter() {

    if (this.configParams != null) {
      console.log(this.configParams);

      if (
        this.configParams.filmeImgBackDrop == undefined ||
        this.configParams.filmeImgUrl == undefined
      ) {
        this.getConfigMovieInfoDb();
      } else {
        this.setUrlsMovies();
      }

      this.latestMovies() ;

    }
  }

  setUrlsMovies() {
    this.filmeImgUrl = this.configParams.filmeImgUrl;
    this.filmeImgBackDrop = this.configParams.filmeImgBackDrop
  }

  getConfigMovieInfoDb() {
    this.service.getConfigInfo().subscribe(
      resp => {
        this.httpImageConfig = resp;
        this.setFilmesProperties();
      }
    )
  }


  setFilmesProperties() {
    if (this.httpImageConfig != undefined) {
      if (this.httpImageConfig.imageConfig.base_url != undefined) {
        this.configParams.filmeImgUrl = this.httpImageConfig.imageConfig.base_url;
      }


      if (this.httpImageConfig.imageConfig.backdrop_sizes.length > 2) {
        this.configParams.filmeImgBackDrop = this.httpImageConfig.imageConfig.backdrop_sizes[2];
      }

      this.cfgService.setConfig(this.configParams);
      this.setUrlsMovies()
    }
  }

  latestMovies() {
    this.presentLoading().then(
      ()=> this.getLatestMovie()
    )
  }

  getLatestMovie(){
    this.service.getLatestMovie(this.pageNumber).subscribe(
      resp => {
        this.listPopular = resp;
        if (this.infiniteScrooll != null){
          this.filmes = this.filmes.concat( this.listPopular.results );
          this.infiniteScrooll.target.complete();
        }
        else{
          this.filmes = this.listPopular.results;
        }  
      }, 
      null, 
      () => {
        if (this.isRefreshing) {
          this.refresher.target.complete();
          this.isRefreshing = false;
        } 
        this.loadCtrl.dismiss(null, undefined);
      }
    )
  }

  async presentLoading() {
    this.loading = await this.loadCtrl.create({ message: "Carregando..." })
    await this.loading.present();
  }
  

  doRefresh(event) {
    this.isRefreshing = true;
    this.refresher = event;
    this.latestMovies();
  }

  openDetails(id) {
    this.navCtrl.navigateForward('/filme-datail', { queryParams: { id: id } });
  }

  loadData(event) {
    this.infiniteScrooll = event;
    this.pageNumber++;
    
    this.latestMovies();
  }

}
