import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { StylesQuestDirective } from './styles-quest.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    StylesQuestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
