import { Routes } from '@angular/router';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { CreateCollaboratorsComponent } from './create-collaborators/create-collaborators.component';
import { UpdateCollaboratorComponent } from './update-collaborator/update-collaborator.component';
import { DeleteCollaboratorComponent } from './delete-collaborator/delete-collaborator.component';

export const routes: Routes = [
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'collaborators/register', component: CreateCollaboratorsComponent },
  { path: 'collaborators/update/:id', component: UpdateCollaboratorComponent },
  { path: 'collaborators/delete/:id', component: DeleteCollaboratorComponent },
];
