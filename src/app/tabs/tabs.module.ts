import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
// 03-10-19
import { PerfilPageModule } from '../perfil/perfil.module';
import { SobrePageModule  } from '../sobre/sobre.module';
import { ConfiguracoesPageModule } from '../configuracoes/configuracoes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    PerfilPageModule, 
    SobrePageModule , 
    ConfiguracoesPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
