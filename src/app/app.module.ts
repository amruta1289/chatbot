import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatindexComponent } from './chatindex/chatindex.component';
import { LoadchatComponent } from './loadchat/loadchat.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ChatindexComponent,
    LoadchatComponent
  ],
  imports: [
    BrowserModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule,
        AppRoutingModule,
        MatTooltipModule,
        MatButtonModule,
        MatExpansionModule,
        MatDialogModule,
        MatSlideToggleModule,
        HttpClientModule
        // AngularFontAwesomeModule,
        
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA , CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
