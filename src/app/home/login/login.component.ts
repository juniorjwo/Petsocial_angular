import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  loginAcesso = { usuario: '', senha: '' };
  constructor(private authService: AutenticacaoService) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .autenticar(this.loginAcesso.usuario, this.loginAcesso.senha)
      .subscribe(
        () => {
          console.log('autenticado com sucesso!');
        },
        (error) => {
          alert('usuario ou senha errados!');
          console.log(error);
        }
      );
  }
}
