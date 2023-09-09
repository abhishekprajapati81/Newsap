import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { NewserviceService } from './service/newservice.service';
import { FooterComponent } from './footer/footer.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { GamenewsComponent } from './gamenews/gamenews.component';
import { AppleComponent } from './apple/apple.component';
import { PoliticsComponent } from './politics/politics.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FooterComponent,
    AllnewsComponent,
    GamenewsComponent,
    AppleComponent,
    PoliticsComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
