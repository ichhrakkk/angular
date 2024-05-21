import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  handleLinkClick(event: MouseEvent): void {
    const target = event.target as HTMLAnchorElement;
    if (target.href && target.href.includes('#')) {
      event.preventDefault(); // Annuler la navigation
    }
  }
}
