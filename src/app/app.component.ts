import { Component } from '@angular/core';

@Component({ // Metadata object that describes how the HTML template and the component class work together
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact Manager';
}

// A component is the combination of an HTML template and a component class that controls a portion of the screen
