import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeComponent } from './pages/life/life.component';
import { WorkComponent } from './pages/work/work.component';
import { HomeComponent } from './pages/home/home.component';
import { EmailComponent } from './pages/email/email.component';


const routes: Routes = [
  { path: 'life', component: LifeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'email', component: EmailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  getPath(): string {
    return 'life';
  }

}