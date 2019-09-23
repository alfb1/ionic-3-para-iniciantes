import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  nome_usuario : string = "Andre Brito";

  constructor() { }

  somaDoisNumeros():void{
    alert("Functions is working....");
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    // this.somaDoisNumeros();
  }

}
