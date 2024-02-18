import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  sidebar: boolean = false;

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

  toggleLanguage() {
    // Implement language toggle logic here
  }
}
