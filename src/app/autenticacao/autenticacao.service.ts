import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    const url='http://localhost:3000/user/login';
    return this.httpClient.post(url, {
      userName: usuario,
      password: senha,
    });
  }
}
