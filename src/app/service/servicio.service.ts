import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { Observable } from 'rxjs'; // Importar Observable

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public api:string = "https://rickandmortyapi.com/api/character?page=2";
  public api2:string = "https://rickandmortyapi.com/api/character?page=3";

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para obtener datos de la API
  getDataFromApi(): Observable<any> {
    return this.http.get(this.api);
  }

  // Método para obtener datos de la segunda API
  getDataFromApi2(): Observable<any> {
    return this.http.get(this.api2);
  }
}
