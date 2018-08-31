import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../main.service';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../modal.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(
    private mainService : MainService,
    private toastr : ToastrService,
    private modalService: ModalService
  ) { }

  users: Object;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.mainService.getUsers().subscribe(
      users => this.users = users
    )
  }

  delete(userId) {
    this.modalService.open(ConfirmModalComponent, 'cancellare').then((response) => {
      if (response) {
        this.mainService.deleteUser(userId).subscribe(() => {
          this.toastr.success('L\'utente è stato cancellato');
          this.getUsers();
        });
      }
    })
  }

}
