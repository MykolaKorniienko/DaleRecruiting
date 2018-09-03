import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  searchPushed = false;
  users: Object;
  sexes = ["f", "m"];

  constructor(
    private mainService: MainService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      data: [moment(new Date()).format("YYYY-MM-DDTHH:mm"), [Validators.required]],
      titolo: ['', [Validators.required]],
      cliente:  ['', [Validators.required]],
      descrizione:  ['', [Validators.required]],
      text:  ['', []],
      sesso:  ['', []],
      etaDa:  ['', []],
      etaA:  ['', []],
      residenzaComune:  ['', []],
    });
  }

  get f() { return this.searchForm.controls; }

  search() {
    this.submitted = true;
    if (this.searchForm.invalid) {
      return;
    }

    let searchQuery = Object.assign({}, this.searchForm.value);
    for(let key in searchQuery) {
      if (!searchQuery[key]) {
        delete searchQuery[key];
      }
    }
    
    console.log('searchForm', searchQuery);
    this.mainService.searchUser(searchQuery).subscribe((users) => {
      this.users = users;
      this.submitted = false;
      this.searchPushed = true;
    }, () => {
      this.users = [];
      this.submitted = false;
    });
  }

  cancel() {
    this.searchForm.reset();
    this.searchForm.patchValue({
      data: moment(new Date()).format("YYYY-MM-DDTHH:mm")
    });
    this.users = [];
  }

}
