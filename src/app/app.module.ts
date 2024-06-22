import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CollaboratorsModule],
  exports: [],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
