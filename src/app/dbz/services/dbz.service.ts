import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Picoro',
    power: 5000
  },{
    id: uuid(),
    name: 'Goku',
    power: 11000
  },{
    id: uuid(),
    name:'Vegetta',
    power: 9000
  }]

  addCharacter(character: Character): void {

    const newCharacter: Character ={id: uuid(), ...character};

    this.characters.push(newCharacter);

  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index.valueOf(),1)
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
