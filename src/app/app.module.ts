import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { CreateCollaboratorsModule } from './create-collaborators/create-collaborators.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CollaboratorsModule, 
    CreateCollaboratorsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  declarations: [AppComponent],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
