import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Categorias';

  categorias = [
    {id: '1', nome:'Informatica'},
    {id: '2', nome:'Informatica'},
    {id: '3', nome:'Informatica'},
    {id: '4', nome:'Informatica'}
  ]

}
