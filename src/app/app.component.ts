import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ConfigService } from './config/config.service';
import { ConfigParams } from './config/config.model';

import { Router } from  '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private service: ConfigService,
    private router : Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let cfg : ConfigParams = this.service.getConfig();
      if ( cfg == null){
        this.service.setConfig({showSlide:false});
      }else{
        this.router.navigateByUrl('/tabed');
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
