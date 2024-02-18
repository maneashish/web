import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  dummyData = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', age: 35, email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', age: 40, email: 'bob@example.com' },
    { id: 5, name: 'Eve Wilson', age: 28, email: 'eve@example.com' },
    { id: 6, name: 'Michael Clark', age: 45, email: 'michael@example.com' },
    { id: 7, name: 'Sara Davis', age: 33, email: 'sara@example.com' },
    { id: 8, name: 'David Miller', age: 39, email: 'david@example.com' }
  ];
  filteredData = this.dummyData.slice(); // Initially, show all data

  filters = {
    id: '',
    name: '',
    age: '',
    email: ''
  };

  applyFilters() {
    this.filteredData = this.dummyData.filter(item =>
      item.id.toString().includes(this.filters.id) &&
      item.name.toLowerCase().includes(this.filters.name.toLowerCase()) &&
      item.age.toString().includes(this.filters.age) &&
      item.email.toLowerCase().includes(this.filters.email.toLowerCase())
    );
  }
}
