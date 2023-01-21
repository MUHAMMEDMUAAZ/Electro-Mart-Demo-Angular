import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(){}

  title = 'MobileMart';


url:string="../assets/tab2.jpg";
changeImage(event:any){
  this.url=event.target.src;
  
  
}
}