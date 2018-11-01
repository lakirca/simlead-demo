// Module import
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

// Router and Routes import
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

// Angular Firebase import
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";

// Compoennts import
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ArticlesComponent } from "./articles/articles.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditComponent } from "./articles/edit/edit.component";
import { NavComponent } from "./frontend/nav/nav.component";
import { ArticleComponent } from "./frontend/article/article.component";
import { AvailableComponent } from "./frontend/available/available.component";
import { ClientComponent } from "./frontend/client/client.component";
import { CounterComponent } from "./frontend/counter/counter.component";
import { FeaturesComponent } from "./frontend/features/features.component";
import { FooterComponent } from "./frontend/footer/footer.component";
import { HeaderComponent } from "./frontend/header/header.component";
import { HomeComponent } from "./frontend/home/home.component";
import { LayoutComponent } from "./frontend/layout/layout.component";
import { MailComponent } from "./frontend/mail/mail.component";
import { MainDirectionsComponent } from "./frontend/main-directions/main-directions.component";
import { ShowArticleComponent } from "./frontend/show-article/show-article.component";
import { OurWorkComponent } from "./frontend/our-work/our-work.component";
import { NotFoundComponent } from "./frontend/not-found/not-found.component";
import { ImagedetailComponent } from "./frontend/imagedetail/imagedetail.component";
// Services import
import { CustomService } from "./articles/custom.service";
import { ImageService } from "./services/image.service";
import { UploadService } from "./services/upload.service";
import { AuthenticationGuard } from "./services/authenticationGuard.service";
import { AuthenticationService } from "./services/authentication.service";
import { PageService } from "./services/page.service";
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ArticlesComponent,
    DashboardComponent,
    EditComponent,
    NavComponent,
    ArticleComponent,
    AvailableComponent,
    ClientComponent,
    CounterComponent,
    FeaturesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    MailComponent,
    MainDirectionsComponent,
    ShowArticleComponent,
    OurWorkComponent,
    NotFoundComponent,
    ImagedetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    RecaptchaModule.forRoot()
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    ImageService,
    AngularFireDatabase,
    UploadService,
    CustomService,
    PageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
