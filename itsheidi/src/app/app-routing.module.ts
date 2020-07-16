import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeComponent } from './life/life.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'life', component: LifeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'home', component: HomeComponent },
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
