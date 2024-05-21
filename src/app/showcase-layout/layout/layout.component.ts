import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

  export class LayoutComponent implements OnInit {
    isShowcaseLayout: boolean = false;
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.route.url.subscribe(urlSegments => {
        // Vérifier si la page actuelle est une page spécifique utilisant ShowcaseLayoutComponent
        if (urlSegments && urlSegments.length > 0) {
          const currentPage = urlSegments[urlSegments.length - 1].path;
          this.isShowcaseLayout = ['faq', 'login', 'register', '404-error'].includes(currentPage);
        }
      });
    }
  }

