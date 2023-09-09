import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { GamenewsComponent } from './gamenews/gamenews.component';
import { AppleComponent } from './apple/apple.component';
import { PoliticsComponent } from './politics/politics.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
{path:'',component:HeadingComponent},//home
{path:'allnews',component:AllnewsComponent}, //news
{path:'sportnews',component:GamenewsComponent}, //sport
{path:'applenews',component:AppleComponent}, //apple
{path:'politicnews',component:PoliticsComponent}, //politicss
{path:'**',component:PageComponent}, //404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
