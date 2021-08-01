import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() navigate = new EventEmitter<string>();
  onNav(component: string) {
    this.navigate.emit(component);
  }
}
