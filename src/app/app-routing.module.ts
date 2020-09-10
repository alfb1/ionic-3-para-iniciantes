import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m=>m.TabsPageModule),
  },
  { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'sobre' , loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'feed'  , loadChildren: './feed/feed.module#FeedPageModule' },
 ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, /*enableTracing : true*/ })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
