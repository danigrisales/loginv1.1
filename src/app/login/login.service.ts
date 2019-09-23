import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  autenticarSer(data:string){
    console.log('metodo en serivio '+ data)
  }
  
  
}
