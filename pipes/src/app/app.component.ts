import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  decimal: number = 0;
  distance: number = 0;

  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.date = value;
  }

  onAmountChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.amount = parseFloat(value);
  }

  onDecimalChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.decimal = parseFloat(value);
  }

  onDistanceChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.distance = parseFloat(value);
  }
}
