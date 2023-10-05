import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  curseName: string = 'Angular 2';
  numberStudents = 20;
  professor = 'Matheus';
  status = true;
  subjects = ['Introdução ao Angular 2', 'Diretivas', 'Eventos'];
}
