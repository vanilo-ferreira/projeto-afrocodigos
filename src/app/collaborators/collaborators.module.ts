import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './collaborators.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [CollaboratorsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [CollaboratorsComponent]
})
export class CollaboratorsModule { }
