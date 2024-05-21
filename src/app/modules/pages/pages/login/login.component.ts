import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   
  email: string = ''; // Déclaration explicite du type pour usernameOrEmail
  password: string = ''; // Déclaration explicite du type pour password



  constructor(private loginService: LoginService, private router: Router) {}


  submitLoginForm() {
    // Envoyez les informations de connexion au serveur via le service d'authentification
    this.loginService.authenticateUser(this.email, this.password).subscribe(
      (response: any) => {
        // Authentification réussie, gérer la réponse du serveur (stockage des informations de l'utilisateur, redirection, etc.)
        this.router.navigate(['/home']); // Redirection vers la page d'accueil après connexion
      },
      (error: any) => {
        // Gérer les erreurs d'authentification (afficher un message d'erreur à l'utilisateur, par exemple)
      }
    );
  }
}
