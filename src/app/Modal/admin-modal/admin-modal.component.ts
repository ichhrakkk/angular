import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.css']
})
export class AdminModalComponent implements OnInit {


  
  @Input() basicFormData: any;
  @Output() submitSpecificForm: EventEmitter<any> = new EventEmitter<any>();


  formData: any = {
    position: '',
    Datedembauche: '',
    salaire: '',
    Numsecuritesociale: '',
    qualifications: '',
    Statutdemploi: '',
    Statutcompte: ''
  };

      errorMessage: string = '';
      formSubmitted: boolean = false;
      errorMessages: any = {};

    
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
    this.errorMessages = {
      position: this.formData.position ? '' : 'Le champ position est requis.',
      datedembauche: this.formData.datedembauche ? '' : 'Le champ date d\'embauche est requis.',
      salaire: this.formData.salaire ? '' : 'Le champ salaire est requis.',
      numsecuritesociale: this.formData.numsecuritesociale ? '' : 'Le champ numéro de sécurité sociale est requis.',
      qualifications: this.formData.qualifications ? '' : 'Le champ qualifications est requis.',
      statutdemploi: this.formData.statutdemploi ? '' : 'Le champ statut d\'emploi est requis.',
      statutcompte: this.formData.statutcompte ? '' : 'Le champ statut de compte est requis.'
    };
  }
}

isFormValid(): boolean {
  return (
    this.formData.position &&
    this.formData.datedembauche &&
    this.formData.salaire &&
    this.formData.numsecuritesociale &&
    this.formData.qualifications &&
    this.formData.statutdemploi &&
    this.formData.statutcompte
  );
}


// Effacer le message d'erreur lors de la saisie dans le champ
clearError(fieldName: string) {
  this.errorMessages[fieldName] = '';
}


}