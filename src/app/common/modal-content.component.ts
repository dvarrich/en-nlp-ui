import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngbd-modal-content',
    template: `
  
            <div class="modal-header">
            <h4 class="modal-title">{{name}}</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <p>{{text}}!</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
            </div>  
  `,
    styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class ModalContent {
    @Input() name;
    @Input() text;

    constructor(public activeModal: NgbActiveModal) {

    }
}