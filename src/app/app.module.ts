import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { CreateCollaboratorsModule } from './create-collaborators/create-collaborators.module';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CollaboratorsModule, 
    CreateCollaboratorsModule
  ],
  exports: [],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
