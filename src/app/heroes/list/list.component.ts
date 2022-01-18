import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor', 'Capitán América'];
  deletedHero: string = '';
  
  deleteHero(): void{
    this.deletedHero = this.heroes.shift() || '';
  }
}
