import { Injectable } from '@angular/core';
import { Config } from './config.model';

const CONFIG_NAME= 'config' 
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  private config : Config;
  constructor( ) { }

  // recupera dados do localstorage
  getConfigData():any{

    return localStorage.getItem(CONFIG_NAME) || {};
  }

  //grava dados no localstorage
  setConfigData(value : Config){
    if (value.showSlide)
     this.config.showSlide = value.showSlide ;

     if (value.name)
     this.config.name = value.name ;

     if (value.username)
     this.config.username = value.username ;

     localStorage.setItem(CONFIG_NAME, JSON.stringify(this.config));
  }

}
