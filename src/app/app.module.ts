import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsPageModule } from './tabs/tabs.module';

import { MovieService } from './api/movie.service';
import { ConfigService } from './config/config.service';;
import { CartolaService } from './cartola/cartola.service'
import { IntroPageModule } from './intro/intro.module';
import { ConfiguracoesPageModule } from './configuracoes/configuracoes.module';
import { SobrePageModule } from './sobre/sobre.module';
import { PerfilPageModule } from './perfil/perfil.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, IonicModule.forRoot(), 
             AppRoutingModule, HttpClientModule, 
             TabsPageModule, 
             IntroPageModule, 
             ConfiguracoesPageModule, 
             SobrePageModule,
             PerfilPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
    ConfigService,
    CartolaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
