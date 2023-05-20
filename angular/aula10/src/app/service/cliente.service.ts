import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //Se não colocar Private, ele não envia
  //OBSERVABLE É OPCIONAL, para fazer chamada em paralelo(fazer uma chamada e ainda continuar esperando ele)
  constructor(private http:HttpClient) { }

  //GET
  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/cliente');
  }

  //POST
  inserir(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:3000/cliente', cliente);//precisa do Id e os dados do cliente por inteiro
  }
  //PUT
  atualizar(cliente: Cliente){
    return this.http.put<Cliente>(`http://localhost:3000/cliente/${cliente.id}`, cliente);
  }

  //DELETE
  //any nao se importa com o tipo
  excluir(id: number):Observable<any>{
    //delete nao precisa de tipo
    return this.http.delete(`http://localhost:3000/cliente/${id}`);
  }
}
