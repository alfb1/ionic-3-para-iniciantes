import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { URL_CARTOLA } from '../api.api';
import { Rodada } from './cartola.model';
import { Observable } from 'rxjs';


/*

amigos_cartola:   "//api.cartolafc.globo.com/auth/amigos",
atleta_pontuacao: "//api.cartolafc.globo.com/auth/mercado/atleta/{idAtleta}/pontuacao",
atletas_parciais: "//api.cartolafc.globo.com/atletas/pontuados",
auth: "//api.cartolafc.globo.com/auth/time/info",
banir_times: "//api.cartolafc.globo.com/auth/liga/{slugLiga}/banir",
busca_ligas: "//api.cartolafc.globo.com/ligas?q=",
busca_times: "//api.cartolafc.globo.com/times?q=",
campeoes_ligas_nacionais: "//api.cartolafc.globo.com/logged/ligas/campeoes-nacionais",
check_slug_time: "//api.cartolafc.globo.com/logged/time/?search=",
check_slug_liga: "//api.cartolafc.globo.com/logged/liga/?search=",
clear_cartoleiro_pro: "//api.cartolafc.globo.com/auth/time/pro",
clubes: "//api.cartolafc.globo.com/clubes",
convidar_times: "//api.cartolafc.globo.com/auth/liga/{slugLiga}/convidar",
convite: "//api.cartolafc.globo.com/auth/mensagem/{id}/",
criar_time: "//api.cartolafc.globo.com/logged/time/criar",
historico_transacoes: "//api.cartolafc.globo.com/auth/time/historico/",
liga: "//api.cartolafc.globo.com/auth/liga/{slug}",
liga_associacao: "//api.cartolafc.globo.com/auth/liga/{slug}/associacao",
liga_criar: "//api.cartolafc.globo.com/auth/liga/criar",
ligas_do_usuario: "//api.cartolafc.globo.com/auth/ligas",
ligasPatrocinadores: "//api.cartolafc.globo.com/patrocinadores",
mercado_destaques: "//api.cartolafc.globo.com/mercado/destaques",
mercado: "//api.cartolafc.globo.com/atletas/mercado",
noticias: "//api.cartolafc.globo.com/auth/noticias",
partidas: "//api.cartolafc.globo.com/partidas/{rodada}",
performance_atletas: "//api.cartolafc.globo.com/logged/stats/atletas",
performance_time: "//api.cartolafc.globo.com/auth/stats/historico",
posrodada_destaques: "//api.cartolafc.globo.com/pos-rodada/destaques",
reativar_ligas_acao: "//api.cartolafc.globo.com/auth/reativar/liga/{slug}",
reativar_ligas: "//api.cartolafc.globo.com/auth/reativar/ligas",
rodadas: "//api.cartolafc.globo.com/rodadas",
salvarTime: "//api.cartolafc.globo.com/auth/time/salvar",
status_mercado: "//api.cartolafc.globo.com/mercado/status",
time_adv: "//api.cartolafc.globo.com/time/slug/{slug}",
time_id: "//api.cartolafc.globo.com/time/id/{id}",
time_adv: "//api.cartolafc.globo.com/time/slug/{slug}/{rodada}", // opcionalmente aceita a rodada
time_id: "//api.cartolafc.globo.com/time/id/{id}/{rodada}", // opcionalmente aceita a rodada
time: "//api.cartolafc.globo.com/auth/time",
validarAssinaturaUsuarioSemTime: "//api.cartolafc.globo.com/logged/time/validar-pro"

1 - proxy.conf.json
{
  "/api/*": {
    "target": "https://my-api-domain.com/api",
    "changeOrigin": true,
    "secure": false,
    "pathRewrite": {"^/api" : ""}
  }
}
2 - Then updating angular.json by including the above proxy configuration.
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "app:build",
      "proxyConfig": "src/proxy.conf.json"
    },

3 - Went ahead and configured it as follows inside ionic.config.json:
{
  "name": "sampleAppName",
  "integrations": {
    "cordova": {}
  },
  "type": "angular",
  "id": "01aae245",
  "proxies": [
    {
      "path": "/api",
      "proxyUrl": "https://my-api-domain.com/api"
    }
  ]
}

ionic serve -- --proxy-config proxy.conf.json

referencias :
https://github.com/ionic-team/ionic-framework/issues/16233
https://www.leonelngande.com/how-i-used-ionic-4-cli-proxy-to-redirect-api-requests-and-avoid-cors-errors/

*/
@Injectable({
  providedIn: 'root'
})
export class CartolaService {
  basePath = "/ApiCartola";
  
  constructor(private http: HttpClient, private platform : Platform) {
    if ( this.platform.is("cordova")){
      this.basePath = URL_CARTOLA;
      console.log("URL_CARTOLA")
    }
   }

   getRodada():Observable<Rodada[]>{
    return this.http.get<Rodada[]>(`${this.basePath}/rodadas`);
  }
}
