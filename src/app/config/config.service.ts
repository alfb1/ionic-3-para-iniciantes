import { Injectable } from '@angular/core';
import { ConfigParams } from './config.model';
import { CONFIG } from '../api.api';


@Injectable()

export class ConfigService{
  constructor(){}
  
  setConfig(config :ConfigParams){
      localStorage.setItem(CONFIG, JSON.stringify(config));
  }

  getConfig():ConfigParams{
     let res = localStorage.getItem(CONFIG);
     let cfg = JSON.parse(res);
     return cfg;
  }
}