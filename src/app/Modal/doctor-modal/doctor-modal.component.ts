import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css']
})
export class DoctorModalComponent implements OnInit {



 
  @Input() basicFormData: any;
  @Output() submitSpecificForm: EventEmitter<any> = new EventEmitter<any>();


  formData: any = {
    specialitesDentaires: '',
    anneesExperience: '',
    numeroLicenceProfessionnelle: '',
    traitementsPrecedents: '',
    horairesConsultation: ''
  };
  



  formSubmitted: boolean = false;
  successMessage: string = '';
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
        specialitesDentaires: this.formData.specialitesDentaires ? '' : 'Le champ spécialités dentaires est requis.',
        anneesExperience: this.formData.anneesExperience ? '' : 'Le champ années d\'expérience est requis.',
        numeroLicenceProfessionnelle: this.formData.numeroLicenceProfessionnelle ? '' : 'Le champ numéro de licence professionnelle est requis.',
        traitementsPrecedents: this.formData.traitementsPrecedents ? '' : 'Le champ historique des traitements précédents est requis.',
        horairesConsultation: this.formData.horairesConsultation ? '' : 'Le champ horaires de consultation est requis.'
      };
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.specialitesDentaires &&
      this.formData.anneesExperience &&
      this.formData.numeroLicenceProfessionnelle &&
      this.formData.traitementsPrecedents &&
      this.formData.horairesConsultation
    );
  }

   // Effacer le message d'erreur lors de la saisie dans le champ
  clearError(fieldName: string) {
    this.errorMessages[fieldName] = '';
  }
}


