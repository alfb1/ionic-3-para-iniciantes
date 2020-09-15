import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PerfilPage } from '../perfil/perfil.page';
import { SobrePage } from '../sobre/sobre.page';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  rootPage = PerfilPage;
  sobrePage = SobrePage;

  constructor(private nav : NavController) { }

  ngOnInit() {
  }

  openPerfil(){;
    this.nav.navigateRoot('/tabs/perfil');
  }

  openSobre(){
    this.nav.navigateForward('/tabs/sobre')
  }
  

}
