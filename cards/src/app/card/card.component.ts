import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = 'Default Title'
  @Input() imageUrl: string = 'Default imageUrl'
  @Input() username: string = 'Default username'
  @Input() content: string = 'Default content'
}
