import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorsComponent } from './collaborators.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CollaboratorsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [CollaboratorsComponent]
})
export class CollaboratorsModule { }
