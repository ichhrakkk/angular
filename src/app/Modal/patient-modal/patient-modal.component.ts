import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.css']
})
export class PatientModalComponent implements OnInit {
  
 
  @Input() basicFormData: any;
  @Output() submitSpecificForm: EventEmitter<any> = new EventEmitter<any>();

  formData: any = {
    dateNaissance: '',
    gender: '',
    antecedentsMedicaux: '',
    antecedentsDentaires: '',
    historiqueChirurgie: '',
  };

  formSubmitted: boolean = false;
  successMessage: string = '';
  errorMessages: any = {}; // Pour stocker les messages d'erreur



  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  submitForm() {
    if (this.isFormValid()) {
      this.submitSpecificForm.emit(this.formData);
    } else {
      // Afficher les messages d'erreur pour les champs non remplis
      this.errorMessages = {
        dateNaissance: this.formData.dateNaissance ? '' : 'La date de naissance est requise.',
        gender: this.formData.gender ? '' : 'Le genre est requis.',
        antecedentsMedicaux: this.formData.antecedentsMedicaux ? '' : 'Les antécédents médicaux sont requis.',
        antecedentsDentaires: this.formData.antecedentsDentaires ? '' : 'Les antécédents dentaires sont requis.',
        historiqueChirurgie: this.formData.historiqueChirurgie ? '' : "L'historique de chirurgie est requis."
      };
    }
  }

// Vérifier si le formulaire est valide
isFormValid(): boolean {
  return (
    this.formData.dateNaissance &&
    this.formData.gender &&
    this.formData.antecedentsMedicaux &&
    this.formData.antecedentsDentaires &&
    this.formData.historiqueChirurgie
  );
}


// Effacer le message d'erreur lors de la saisie dans le champ
clearError(fieldName: string) {
  this.errorMessages[fieldName] = '';
}

}


