import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app1';
  constructor(private router: Router) {}
  
  handleLinkClick(event: MouseEvent): void {
    const target = event.target as HTMLAnchorElement;
    if (target.href && target.href.includes('#')) {
      event.preventDefault(); // Annuler la navigation
    }
  }
}



