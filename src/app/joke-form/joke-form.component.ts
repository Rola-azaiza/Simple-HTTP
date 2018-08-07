import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Joke} from '../models/joke';
import {Reg} from './reg';

//


@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit , AfterViewInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  model: Reg = new Reg('', '');
  @ViewChild('f') form: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.form.valueChanges.subscribe(
      values => {
        console.log('values, ', values);
      }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.jokeCreated.emit(new Joke(this.model.setup, this.model.punchline));
      console.log('values ', this.form.value);
      this.form.reset();
    } else {
      console.log('Invalid Form ');
    }
  }
}
