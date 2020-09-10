import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Feed } from './feed.model';
import { MovieService } from '../movie.service';
import { FilmeDbResults } from '../filmesDb.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  image_path = "https://image.tmdb.org/t/p/w500/";

  public lista_filmes : FilmeDbResults[]=[];
  public loading ;

  objeto_feed : Feed = new Feed();

  nome_usuario : string = "Andre Brito";

  constructor(
    private movieService : MovieService,
    private loadingController: LoadingController
  ) { 
    this.objeto_feed.data = "November,5 1995";
    this.objeto_feed.titulo = 'Andre Brito';
    this.objeto_feed.descricao = 'Aulas de ionic';
    this.objeto_feed.qtd_likes = 100;
    this.objeto_feed.qtd_comments = 230;
    this.objeto_feed.time_comment = '11h ago';
  }

  somaDoisNumeros():void{
    alert("Functions is working....");
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getPopular();
  }

  getLatest(){
    this.movieService.getLatest().subscribe(
      response => console.log('response : ', response),
      error => console.log('erro : ', error)
    )
  }

  getPopular(){
    this.presentLoading();
    this.movieService.getPopular().subscribe(
      response => {
       
        this.lista_filmes = response.results ;
        this.presentDismiss();
      },
      error => console.log('erro : ', error),
      
    )
  }


  async presentLoading() {
    return await this.loadingController.create({ message: 'Please wait...',
  });

  }

  async presentDismiss(){
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }



}
