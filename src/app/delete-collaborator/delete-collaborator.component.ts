import { Collaborator } from './../app.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-collaborator',
  templateUrl: './delete-collaborator.component.html',
  styleUrl: './delete-collaborator.component.css'
})
export class DeleteCollaboratorComponent implements OnInit{

  id: string;

  collaborator: Collaborator;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.dataService.getCollaborator(this.id)
      .subscribe(res => {
        this.collaborator = res;
      });
  }

  delete() {
    this.dataService.deleteCollaborator(this.id)
      .subscribe(res => {
        alert(`Removido com sucesso!`);
        this._route.navigate(['/collaborators']);
      });
  }

  cancel() {
    this._route.navigate(['/collaborators']);
  }
}
