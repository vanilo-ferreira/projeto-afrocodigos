import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../app.model';

@Component({
  selector: 'app-update-collaborator',
  templateUrl: './update-collaborator.component.html',
  styleUrl: './update-collaborator.component.css'
})
export class UpdateCollaboratorComponent implements OnInit{

  id: string;

  teste = "sasas";

  body: RequestUpdate;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
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
      alert(`Atualizado: ${res.created_at}, Nome: ${res.name}, Cargo: ${res.role}`);
    })
  }
}
