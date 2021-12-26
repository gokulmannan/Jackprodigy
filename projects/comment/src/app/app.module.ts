import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CommentPopupComponent } from './components/comment-popup/comment-popup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainPipe } from 'src/app/common/pipe/main-pipe.module';
import { CommonNavModule } from 'src/app/common/common-nav.module';

@NgModule({  declarations: []
})
export class CommentSharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CommentPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MainPipe,
    CommonModule,
    CommonNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
