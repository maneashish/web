import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() languageToggle = new EventEmitter<void>();
  currentLanguage: string = 'English';

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'English' ? 'Arabic' : 'English';
    this.languageToggle.emit();
  }
}
