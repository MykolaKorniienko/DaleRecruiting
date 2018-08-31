import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  searchPushed = false;
  searchUser = {};
  users:any;
  sexes = ["f", "m"];

  constructor(
    private formBuilder: FormBuilder, 
    private mainService: MainService, 
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      nome: ['', [Validators.maxLength(50)]],
      cognome: ['', [Validators.maxLength(100)]],
      email:  ['', [Validators.email]],
      eta:  ['', [Validators.min(0), Validators.max(100)]],
      sesso:  ['', []],
      nascitaPaese:  ['', []],
      nascitaData:  ['', []],
      nazionalita:  ['', [Validators.maxLength(100)]],
      formazioneScolastico:  ['', []],
      technologie:  ['', []],
      dataColloquio:  ['', []],
      residenzaComune:  ['', [Validators.maxLength(150)]],
    });
  }

  get f() { return this.searchForm.controls; }

  search() {
    this.submitted = true;
    
    if (!Object.keys(this.searchUser).length) {
        return this.submitted = false;
    }

    for(let key in this.searchUser) {
      if (!this.searchUser[key]) {
        delete this.searchUser[key];
      }
    }

    this.mainService.searchUser(this.searchUser).subscribe((users) => {
      this.users = users;
      this.submitted = false;
      this.searchPushed = true;
    }, () => {
      this.users = [];
      this.submitted = false;
    });
  }

  cancel() {
    this.searchUser = {};
  }

}
