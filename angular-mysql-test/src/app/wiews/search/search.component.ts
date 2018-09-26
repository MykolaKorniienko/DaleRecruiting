import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'
import {SearchFilter} from "../../models/searchFilter";
import {SearchFilterTransferService} from "../../services/search-filter-transfer.service";

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

  date: Date = new Date();
  title: string = '';
  cliente: string = '';
  description: string = '';
  gender: string = '';
  ageFrom: number;
  ageTo: number;

  constructor(
    private mainService: MainService, 
    private formBuilder: FormBuilder,
    private serchFilterTransfer: SearchFilterTransferService
  ) { }

  ngOnInit() {

    if(this.serchFilterTransfer.getSearchFilter() == null){


    }


    this.searchForm = this.formBuilder.group({
      data: [moment(this.date).format("YYYY-MM-DD HH:mm"), [Validators.required]],
      titolo: [this.title, [Validators.required]],
      cliente:  [this.cliente , [Validators.required]],
      descrizione:  [this.description , [Validators.required]],
      text:  ['', []],
      sesso:  ['', []],
      etaDa:  ['', []],
      etaA:  ['', []],
      residenzaComune:  ['', []],
      campoInnesistente: ['', []],
    });

    if(this.serchFilterTransfer.getSearchFilter() == null){


    }
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
