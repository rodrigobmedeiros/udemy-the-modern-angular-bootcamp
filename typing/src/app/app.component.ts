import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomSentence: string = faker.lorem.sentence();
  isCorrect: boolean = false;
  enteredText: string = '';

  constructor() {}

  detectChangeInText(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
    this.isCorrect = this.enteredText === this.randomSentence;
  }
}
