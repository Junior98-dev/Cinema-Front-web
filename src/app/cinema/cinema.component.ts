import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit
{

  public villes:any;
  public cinemas:any;
  public currentVille:any;
  public vurrentCinema: any;

  constructor(private cinemaService:CinemaService){}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.cinemaService.getVilles().subscribe(
      data => {
        this.villes=data;
      },err => {
        console.log(err);
      }
    ) 
    
  }
  
  onGetCinemas(v: any){   
    this.currentVille=v;                          
    this.cinemaService.getCinemas(v)
      .subscribe(data=>{
        this.cinemas=data;
      },err=>{
        console.log(err);
      })
  } 
  

}
