import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniPostComponent } from './shared/components/posts/mini-post/mini-post.component';
import { LargePostComponent } from './shared/components/posts/large-post/large-post.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniPostComponent,
    LargePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
