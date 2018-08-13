import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import {FormsModule} from '@angular/forms';
import {SimpleService} from './simple.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {LogService} from './log.service';
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SimpleService,
    {
      provide: LogService,
      useFactory() {
        const currentDate = new Date();
        return new LogService(currentDate);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
