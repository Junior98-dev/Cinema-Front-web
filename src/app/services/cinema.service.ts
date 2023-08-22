import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  public host:string="http://localhost:8286"

  constructor(private http:HttpClient) { }

  public getVilles(){
    return this.http.get(this.host+"/villes");
  }

  getCinemas(v : any){
    return this.http.get(v._links.cinemas.href);
  }
  getSalles(c: any){
    return this.http.get(this.host+"/salles");
  }
}
