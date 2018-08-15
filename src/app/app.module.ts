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
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    ParentComponent,
    ChildComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'https://jsonplaceholder.typicode.com' },
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
