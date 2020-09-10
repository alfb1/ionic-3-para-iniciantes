import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MovieService } from './providers/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage : any ;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private provider : MovieService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let config = this.provider.getConfigData();
      console.log('initialize provier - config : ', config);

      if ( config == null){
        this.rootPage = 
        config.setConfigData(false);
      }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
