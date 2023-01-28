import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  posts = [
    { title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: '@nature',
      content: 'Saw this awesome tree during my hike today.'
    },
    { title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: '@mountain',
      content: 'Saw this awesome mountain during my hike today.'
    },
    { title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: '@biking',
      content: 'We had biking today.'
    }
  ]
}
