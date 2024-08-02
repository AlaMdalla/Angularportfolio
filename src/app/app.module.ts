import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent,
    ExperiencesComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
