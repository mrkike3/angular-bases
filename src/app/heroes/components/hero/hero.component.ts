import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string ='ironman';
  public age: number = 45;
  public visible: boolean = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

   getHeroeDescription():string {
    return `${this.name} - ${this.age}`
  }


  changeName():void{
    this.name = 'Spiderman'
    this.visible = false;
  }

  changeAge():void{
    this.age = 25
  }
}
