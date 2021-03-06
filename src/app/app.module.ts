import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumHeaderComponent } from './album-header/album-header.component';
import { PlayButtonComponent } from './play-button/play-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumHeaderComponent,
    PlayButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
