import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PASSWORD GENERATOR';
  length = 0;
  password = '';
  hasLetters = false;
  hasNumbers = false;
  hasSymbols = false;

  constructor() {}

  onButtonClick() {

    let letters = 'abcdefghihklmnopqrstuvwxyz'
    let numbers = '1234567890'
    let symbols = '!@#$%&*()'

    let validChars = '';

    if (this.hasLetters) { validChars += letters };
    if (this.hasNumbers) { validChars += numbers };
    if (this.hasSymbols) { validChars += symbols };

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    console.log(generatedPassword);
    this.password = generatedPassword;
  } 

  onChangeUseLetters() {
    this.hasLetters = !this.hasLetters;
  }
  onChangeUseNumbers() {
    this.hasNumbers = !this.hasNumbers;
  }
  onChangeUseSymbols() {
    this.hasSymbols = !this.hasSymbols;
  }

  onChangeLength(event: Event) {
    const length = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(length);
    
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
