import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horas } from '../model/horas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  constructor(private http: HttpClient) {}

  obterHoras(cidade: string):Observable<Horas>{
    return this.http.get<Horas>(`http://worldtimeapi.org/api/timezone/America/${cidade}`);
    //Observable retorna para quem chamou

  }
}
