import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Main component and Routing. 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router';

//Service
import { DataService } from './data.service';
import { DatabaseConnectorService } from './database-connector.service';

//Components
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';
import { SearchResultComponent } from './search-result/search-result.component';


import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MunicipalityDetailComponent } from './fetch-data/munic-detail.component';
import { WindowScrollDirective } from './fetch-data/window-scroll-directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    NewUserComponent,
    MySiteComponent,
    SearchResultComponent,
    
    FetchDataComponent,
    MunicipalityDetailComponent,
    WindowScrollDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    DataService,
    DatabaseConnectorService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
