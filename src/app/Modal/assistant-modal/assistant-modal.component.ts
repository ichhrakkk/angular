import { Component, OnInit , Output, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-assistant-modal',
  templateUrl: './assistant-modal.component.html',
  styleUrls: ['./assistant-modal.component.css']
})
export class AssistantModalComponent implements OnInit {

    
    
  @Input() basicFormData: any;
  @Output() submitSpecificForm: EventEmitter<any> = new EventEmitter<any>();



    formData: any = {

    numerolicence: '', // Numéro de licence
    certifications: '', // Certifications
    Annees_experience: null, // Années d'expérience
    competence_speciale: '' // Compétences spéciales
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
        numerolicence: this.formData.numerolicence ? '' : 'Le champ numéro de licence est requis.',
        certifications: this.formData.certifications ? '' : 'Le champ certifications est requis.',
        Annees_experience: this.formData.Annees_experience ? '' : 'Le champ années d\'expérience est requis.',
        competence_speciale: this.formData.competence_speciale ? '' : 'Le champ compétences spéciales est requis.'
      };
    }
  }
  
  isFormValid(): boolean {
    return (
      this.formData.numerolicence &&
      this.formData.certifications &&
      this.formData.Annees_experience &&
      this.formData.competence_speciale
    );
  }
  
  // Effacer le message d'erreur lors de la saisie dans le champ
  clearError(fieldName: string) {
    this.errorMessages[fieldName] = '';
  }  
}