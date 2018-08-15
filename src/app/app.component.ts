import { Component } from '@angular/core';
import {SimpleService} from './simple.service';
import {LogService} from './log.service';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private simpleService: SimpleService,
              private jj: LogService, private pp: PostService )
  {}
}
