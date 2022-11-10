import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }
  getNoticias(parametros:any):Observable<any>
  {
    const URL=`https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=59af5324226b4e33b715abdd0708b5cb`
    return this.http.get(URL)
  }
}
