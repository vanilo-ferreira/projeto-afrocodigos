import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-afrocodigos';

  constructor (
    private _route: Router
  ) {}

  register() {
    this._route.navigate(['/collaborators/register']);
  }

  list() {
    this._route.navigate(['/collaborators']);
  }
}