import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCollaboratorComponent } from './update-collaborator.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UpdateCollaboratorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[UpdateCollaboratorComponent]
})
export class UpdateCollaboratorModule { }
