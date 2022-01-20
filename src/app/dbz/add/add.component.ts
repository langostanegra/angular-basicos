import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})

export class AddComponent {

  @Input() newCharacter: Character = { name: '', power: 0};

  constructor(private dbzService: DbzService){

  }

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0) { return; }
    
    this.dbzService.addCharacter( this.newCharacter );

    this.newCharacter = {
      name: '',
      power: 0
    }

  }
}
