import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { AuthenticationGuard } from "./services/authenticationGuard.service";
import { ArticlesComponent } from "./articles/articles.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditComponent } from "./articles/edit/edit.component";
import { HomeComponent } from "./frontend/home/home.component";
import { ArticleComponent } from "./frontend/article/article.component";
import { ShowArticleComponent } from "./frontend/show-article/show-article.component";
import { NotFoundComponent } from "./frontend/not-found/not-found.component";
import { OurWorkComponent } from "./frontend/our-work/our-work.component";
import { ImagedetailComponent } from "./frontend/imagedetail/imagedetail.component";

export const routes: Routes = [
  // Backend routes
  {
    path: "articles",
    component: ArticlesComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "articles/:id",
    component: EditComponent,
    canActivate: [AuthenticationGuard]
  },
  // Home Route
  { path: "", component: HomeComponent },
  // Login Route
  { path: "login", component: LoginComponent },
  // Frontend Routes
  {
    path: "article",
    redirectTo: "our_work",
    pathMatch: "full",
    // component: ArticleComponent
  },
  {
    path: "our_work/:id",
    component: ImagedetailComponent
  },
  {
    path: "article/:id",
    component: ShowArticleComponent
  },
  {
    path: "our_work",
    component: OurWorkComponent
  },
  // Not Found Route
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}