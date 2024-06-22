import { Routes } from '@angular/router';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CreateCollaboratorsComponent } from './create-collaborators/create-collaborators.component';

export const routes: Routes = [
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'register', component: CreateCollaboratorsComponent },
];
