import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  loginAcesso = { usuario: '', senha: '' };
  constructor(private authService: AutenticacaoService, private router:Router) {}

  ngOnInit(): void {}

  login() {
    this.authService
      .autenticar(this.loginAcesso.usuario, this.loginAcesso.senha)
      .subscribe(
        () => {
       this.router.navigate(['animais']);
        },
        (error) => {
          alert('usuario ou senha errados!');
          console.log(error);
        }
      );
  }
}
