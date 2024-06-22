import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.css',
})
export class CollaboratorsComponent implements OnInit {

  responseCollaborators: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService
      .getCollaborators()
      .subscribe(res => this.responseCollaborators = res);
  }
}
