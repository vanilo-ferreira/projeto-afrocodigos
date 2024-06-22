import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ResponseCollaborators } from '../app.model';

interface testeR {
  id: number;
  created_at: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.css',
})
export class CollaboratorsComponent implements OnInit {
  responseCollaborators: ResponseCollaborators;

teste: testeR;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getCollaborators()
      .subscribe((res) => (this.teste = res));

      console.log(this.teste);
  }
}
