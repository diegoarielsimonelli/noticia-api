import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noticia-api';
  listaDeNoticias: any[] = [];
  loading: boolean = false;

  constructor(private _api: NoticiasService) {}
  buscarNoticias(parametro: any) {
    this.loading = true;
    this.listaDeNoticias = [];
    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe((result) => {
        this.listaDeNoticias = result.articles;
        this.loading = false;
      });
    }, 1000);
  }
}
