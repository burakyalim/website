import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ProjectComponent } from './project/project.component';
import { SoftwareComponent } from './software/software.component';
import { AngulrComponent } from './angulr/angulr.component';
import { PythonComponent } from './python/python.component';
import { CprogComponent } from './cprog/cprog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'content', component: ContentComponent },
  { path: 'python', component: PythonComponent },
  { path: 'cprog', component: CprogComponent },
  { path: 'angulr', component: AngulrComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ProjectComponent,
    SoftwareComponent,
    AngulrComponent,
    PythonComponent,
    CprogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
