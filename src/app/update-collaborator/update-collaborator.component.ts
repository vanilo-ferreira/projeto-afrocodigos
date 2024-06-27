import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestUpdate } from '../app.model';

@Component({
  selector: 'app-update-collaborator',
  templateUrl: './update-collaborator.component.html',
  styleUrl: './update-collaborator.component.css'
})
export class UpdateCollaboratorComponent implements OnInit{

  id: string;

  body: RequestUpdate;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this.dataService.getCollaborator(this.id)
      .subscribe(res => {
        this.body = {
          name: res.name,
          role: res.role
        }
      });
  }

  update() {
    this.dataService.updateCollaborator(this.id, this.body)
    .subscribe(res=> {
      alert(`Cadastro Atualizado com sucesso!!!\n\nNome: ${res.name}\nCargo: ${res.role}`);
      this._route.navigate(['/collaborators']);
    })
  }
}
