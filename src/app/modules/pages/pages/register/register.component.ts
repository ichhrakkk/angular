import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminModalComponent } from 'src/app/Modal/admin-modal/admin-modal.component';
import { AssistantModalComponent } from 'src/app/Modal/assistant-modal/assistant-modal.component';
import { DoctorModalComponent } from 'src/app/Modal/doctor-modal/doctor-modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientModalComponent } from 'src/app/Modal/patient-modal/patient-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // Propriétés pour stocker les informations de base
  basicFormData: any = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: ''
  };

  showRoleErrorMessage: boolean = false;
  showEmailErrorMessage: boolean = false;
  showConfirmPasswordErrorMessage: boolean = false;
  showPasswordErrorMessage: boolean = false;
  showAddressErrorMessage: boolean= false;
  showUsernameErrorMessage: boolean =false;
  showPhoneNumberErrorMessage: boolean=false;

  selectedRole: string = '';
  successMessage: string = '';
  formSubmitted: boolean = false;
  showPasswordMismatchError: boolean = false;
  
  
  
  constructor(private modalService: NgbModal , private authService: AuthService ) {}


saveBasicInfo (formData: any) {
    this.basicFormData = formData;

  }

  checkPasswordMatch() {
    if (!this.basicFormData.confirmPassword) {
        this.showConfirmPasswordErrorMessage = true;
        this.showPasswordMismatchError = false; // Reset the mismatch error message
        return;
    } else {
        this.showConfirmPasswordErrorMessage = false;
    }

    if (this.basicFormData.password !== this.basicFormData.confirmPassword) {
        this.showPasswordMismatchError = true;
    } else {
        this.showPasswordMismatchError = false;
    }
}

resetConfirmPasswordError() {
  if (!this.basicFormData.confirmPassword) {
      this.showPasswordMismatchError = false; // Reset the mismatch error message if the confirm password field is empty
  }
}


onRoleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedRole = target.value;

    
    // Réinitialiser les messages d'erreur
    this.resetErrorMessages();
 
    if (!this.selectedRole) {
      // Afficher le message d'erreur
      this.showRoleErrorMessage = true; 
       return; // Arrêter l'exécution de la fonction si aucun rôle n'est sélectionné
      }
      
      // Vérifiez ensuite si tous les champs de base sont remplis
    if (!this.basicFormData.username || !this.basicFormData.email || !this.basicFormData.password || !this.basicFormData.confirmPassword || !this.basicFormData.address || !this.basicFormData.phoneNumber) {
      // Afficher un message d'erreur pour chaque champ non rempli
      this.showUsernameErrorMessage = !this.basicFormData.username;
      this.showEmailErrorMessage = !this.basicFormData.email;
      this.showPasswordErrorMessage = !this.basicFormData.password;
      this.showConfirmPasswordErrorMessage = !this.basicFormData.confirmPassword;
      this.showAddressErrorMessage = !this.basicFormData.address;
      this.showPhoneNumberErrorMessage = !this.basicFormData.phoneNumber;
      return; // Arrêter l'exécution de la fonction si un champ de base n'est pas rempli
    }

    // Ajoutez la vérification de la compatibilité des mots de passe ici
    if (this.showPasswordMismatchError) {
      return;
  }

    // Appeler la fonction pour ouvrir la fenêtre modale correspondante au rôle sélectionné
    if (this.selectedRole === 'patient') {
        this.openPatientModal();
    } else if (this.selectedRole === 'doctor') {
        this.openDoctorModal();
    } else if (this.selectedRole === 'assistant') {
        this.openAssistantModal();
    } else if (this.selectedRole === 'admin') {
        this.openAdminModal();
    }
}



openPatientModal() {
    const modalRef = this.modalService.open(PatientModalComponent, { size: 'lg' });
    modalRef.componentInstance.basicFormData = this.basicFormData;
    modalRef.componentInstance.submitSpecificForm.subscribe((formData: any) => {
      this.saveAllData(formData);
    });
  }


openDoctorModal() {
    const modalRef = this.modalService.open(DoctorModalComponent, { size: 'lg' });
    modalRef.componentInstance.basicFormData = this.basicFormData;
    modalRef.componentInstance.submitSpecificForm.subscribe((formData: any) => {
      this.saveAllData(formData);
    });
  }



openAssistantModal() {
    const modalRef = this.modalService.open(AssistantModalComponent, { size: 'lg' });
    modalRef.componentInstance.basicFormData = this.basicFormData;
    modalRef.componentInstance.submitSpecificForm.subscribe((formData: any) => {
      this.saveAllData(formData);
    });
  }


openAdminModal() {
    const modalRef = this.modalService.open(AdminModalComponent, { size: 'lg' });
    modalRef.componentInstance.basicFormData = this.basicFormData;
    modalRef.componentInstance.submitSpecificForm.subscribe((formData: any) => {
      this.saveAllData(formData);
    });
  }

  

saveAllData(formData: any) {
    const allFormData = { ...this.basicFormData, ...formData, role: this.selectedRole };
    console.log('All form data:', allFormData);
    // Envoyer toutes les données combinées au backend
    this.authService.registerUser(allFormData).subscribe(
        () => {
            this.successMessage = 'L\'utilisateur a été enregistré avec succès.';
            this.formSubmitted = true;
            setTimeout(() => {
                this.closeModal(); // Fermer la fenêtre modale après quelques secondes
            }, 3000); // !!!! Vous pouvez ajuster ce délai si nécessaire
        },
        (error) => {
            console.error('Une erreur est survenue lors de l\'enregistrement de l\'utilisateur : ', error);
        }
    );
}

closeModal(): void {
    this.successMessage = ''; // Clear the success message
    // Logic to close the modal
  }



resetErrorMessages() {
    // Réinitialiser les messages d'erreur
    this.showRoleErrorMessage = false;
    this.showEmailErrorMessage = false;
    this.showConfirmPasswordErrorMessage = false;
    this.showPasswordErrorMessage = false;
    this.showAddressErrorMessage = false;
    this.showUsernameErrorMessage = false;
    this.showPhoneNumberErrorMessage = false;
  }
}
