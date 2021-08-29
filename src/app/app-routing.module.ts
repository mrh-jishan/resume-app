import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Page404Component} from "./page404/page404.component";
import {ResumeComponent} from "./resume/resume.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
