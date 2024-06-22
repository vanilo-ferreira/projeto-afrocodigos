import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { CreateCollaboratorsModule } from './create-collaborators/create-collaborators.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { UpdateCollaboratorModule } from './update-collaborator/update-collaborator.module';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    CollaboratorsModule, 
    CreateCollaboratorsModule,
    UpdateCollaboratorModule
  ],
  exports: [],
  declarations: [AppComponent],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
