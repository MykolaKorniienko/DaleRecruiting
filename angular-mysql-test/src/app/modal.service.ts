import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: NgbModal
  ) { }

  open(component, action) {
    const modalRef = this.modalService.open(component);
    modalRef.componentInstance.action = action;
    return modalRef.result.then((result) => { return result } , () => { return false })
  }
}
