import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  img:string = "../assets/img/image1.png";
  momentDay:string = "matin";

  constructor() { }

  ngOnInit(): void {
  }

  onCLick() {
switch (this.momentDay) {
  case "midi": 
    this.momentDay = "soir"
    break;
  case "soir": 
    this.momentDay = "matin"
    break;

  default:
    this.momentDay = "midi"
    break;
}
  }
}
