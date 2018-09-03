import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { MainService } from "../main.service";
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../modal.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  user = {};
  paesi = ["Italia", "Inghilterra", "Germania", "Stati Uniti d'America", "Spania", "Russia"];
  sexes = ["f", "m"];
  technologie = ["Angular", "Java", "C++", "Laravel", "Spring"];
  formazioneScolastici = ["Politecnico di Milano", "Università Milano Bicocca", "Università di Padova", "Politecnico di Torino", "Ca' Foscari di Venezia", " Università di Pavia"];
  userId: String;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private mainService : MainService, 
    private router:Router,
    private toastr: ToastrService,
    private modalService: ModalService,
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nome: ['', [Validators.required,  Validators.maxLength(50)]],
      cognome: ['', [Validators.required, Validators.maxLength(100)]],
      email:  ['', [Validators.required, Validators.email]],
      eta:  ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      sesso:  ['', []],
      nascitaPaese:  ['', []],
      nascitaData:  ['', []],
      nazionalita:  ['', [Validators.maxLength(100)]],
      formazioneScolastico:  ['', []],
      technologie:  ['', []],
      dataColloquio:  ['', []],
      residenzaComune:  ['', [Validators.maxLength(150)]],
    });
    this.userId = this.route.snapshot.paramMap.get('userId');
    if (this.userId) {
      this.getUserInfo(this.userId);
    }
  }

  get f() { return this.userForm.controls; }

  getUserInfo(userId) {
    this.mainService.getUser(userId).subscribe((user) => {
      if (user) {
        this.user = user;
        console.log('user', user);
        if (user['nascitaData']) {
          this.user['nascitaData'] = moment(new Date(user['nascitaData'])).format("YYYY-MM-DD");
        }
        if (user['dataColloquio']) {
          this.user['dataColloquio'] = moment(new Date(user['dataColloquio'])).format("YYYY-MM-DD");
        }
      } else {
        this.router.navigate(['/users']);
      }
    });
  }

  submit() { 
    this.submitted = true;
    if (this.userForm.invalid) {
        return;
    }

    let functionName = 'addUser';
    let message = 'L\'utente è stato aggiunto con successo';
    let action = 'aggiungere';

    if (this.userId) {
      functionName = 'updateUser';
      message = 'L\'utente è stato modificato con successo';
      action = 'modificare';
    }

    this.modalService.open(ConfirmModalComponent, action).then((response) => {
      if (response) {
        this.mainService[functionName](this.user).subscribe(() => {
          this.toastr.success(message);
          this.router.navigate(['/users']);
          this.submitted = false;
        }, (error) => {
          this.toastr.error(error);
          this.submitted = false;
        });
      } else {
        this.submitted = false;
      }
    })
  }
}