import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Joke} from '../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }
  addJoke(setupVal: string, punchlineVal: string) {
    this.jokeCreated.emit(new Joke(setupVal, punchlineVal));
  }
}
