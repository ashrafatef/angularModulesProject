import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule , HeaderComponent } from './components';
import { ServicesModule } from './services/services.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    ComponentsModule,
    HttpClientModule,
    TranslateModule.forRoot({
 
      loader: {
  
        provide: TranslateLoader,
  
        useFactory: createTranslateLoader,
  
        deps: [HttpClient]
  
      }
  
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
