import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1>{{ title }}</h1>

        <h2>La base es: <strong>{{ base }}</strong></h2>

        <button (click)="addOrSubstract(base)">+ {{ base }}</button>

        <span> {{ number }} </span>

        <button (click)="addOrSubstract(-base)">- {{ base }}</button>
    `
})

export class CounterComponent {
    title: string = 'Contador App';
    number: number = 10;
    base: number = 1;

    addOrSubstract(valor: number) {
        this.number += valor;
    }
}