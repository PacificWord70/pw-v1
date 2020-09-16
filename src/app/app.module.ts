import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabModule } from 'angular-tabs-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LifeComponent } from './pages/life/life.component';
import { WorkComponent } from './pages/work/work.component';
import { HomeComponent } from './pages/home/home.component';
import { EmailComponent } from './pages/email/email.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkExperienceComponent } from './components/work-Experience/work-Experience.component';
import { SchoolComponent } from './components/school/school.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InvolvementComponent } from './components/involvement/involvement.component';
import { SchoolCoursesComponent } from './components/school-courses/school-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    WorkComponent,
    HomeComponent,
    NavbarComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    SchoolComponent,
    ContactComponent,
    SkillsComponent,
    InvolvementComponent,
    EmailComponent,
    SchoolCoursesComponent
  ],
  imports: [
    BrowserModule,
    TabModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
