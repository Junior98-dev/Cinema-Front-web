import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit
{

  public villes:any;

  constructor(private http:HttpClient){}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.http.get("http://localhost:8286/villes").subscribe(
      data => {
        this.villes=data;
      },err => {
        console.log(err);
      }
    )
    
  }

}
