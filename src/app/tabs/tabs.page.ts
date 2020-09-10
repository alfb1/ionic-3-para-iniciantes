import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { SobrePage } from '../sobre/sobre.page';
import { FeedPage  } from '../feed/feed.page';
import { ConfiguracoesPage  } from '../configuracoes/configuracoes.page'; 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1 = SobrePage;
  tab4 = FeedPage ;
  tab5 = ConfiguracoesPage ;

  constructor(
    private router : Router
  ) {}


  click(page : string){
    this.router.navigate(['/'+page]);
  }
}
