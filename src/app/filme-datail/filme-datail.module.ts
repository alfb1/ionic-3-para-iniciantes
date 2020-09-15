import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDatailPageRoutingModule } from './filme-datail-routing.module';

import { FilmeDatailPage } from './filme-datail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDatailPageRoutingModule
  ],
  declarations: [FilmeDatailPage]
})
export class FilmeDatailPageModule {}
