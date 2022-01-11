import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeveloperComponentComponent } from './developer-component/developer-component.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponentComponent,
    SkillComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
