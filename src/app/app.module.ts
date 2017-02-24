import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlueHighLightDirective } from './blue-high-light.directive';
import { YelloHightLightDirective } from './yello-hight-light.directive';

@NgModule({
  declarations: [
    AppComponent,
  YelloHightLightDirective,
    BlueHighLightDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
