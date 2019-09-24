import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {pipe} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:Http) { }

  private headersREST(): Headers{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');
    return myHeaders
  }

  autenticarSer(data:string){
    console.log('metodo en serivio '+ data)
  }

  /*public obtenerProductos(): Observable<any> {
    const url='http://localhost:3000'

      return this.http.get(url,
        { headers:this.headersREST()}).pipe(
          map(response =>{
            return response.json();
          }), pipe(catchError(this.handlError)))        
  }

 

*/}
