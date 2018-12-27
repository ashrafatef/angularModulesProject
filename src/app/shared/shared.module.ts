import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthInterceptorService } from './auth.interceptor.service';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports : [
    TranslateModule
  ],
  providers : [
    {
      provide : HTTP_INTERCEPTORS ,
       useClass : AuthInterceptorService,
       multi : true
    }
  ]
})
export class SharedModule { }
