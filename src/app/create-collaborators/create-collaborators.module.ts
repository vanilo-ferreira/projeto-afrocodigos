import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCollaboratorsComponent } from './create-collaborators.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateCollaboratorsComponent],
  imports: [CommonModule, FormsModule],
  exports: [CreateCollaboratorsComponent]
})
export class CreateCollaboratorsModule {}
