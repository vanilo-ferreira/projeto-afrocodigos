import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-collaborators',
  templateUrl: './create-collaborators.component.html',
  styleUrl: './create-collaborators.component.css'
})
export class CreateCollaboratorsComponent implements OnInit {

  body: any = {
    name: "",
    role: ""
  };

  responseCreateCollaborators: any;

  constructor(
    private dataService: DataService
  ) {

  }
  ngOnInit(): void {

  }

  save() {
    this.dataService.createCollaborators(this.body)
      .subscribe(res => this.responseCreateCollaborators = res)
  }
}
