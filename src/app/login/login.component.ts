import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, http: HttpClient) { }

  ngOnInit() {
  }
  autenticar()
   {
    console.log('autenticando')
    this.loginService.autenticarSer('daniela')
  }
  
}
