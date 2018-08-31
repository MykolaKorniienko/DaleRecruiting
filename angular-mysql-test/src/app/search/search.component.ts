import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  submitted = false;
  searchPushed = false;
  searchUser = {};
  users:any;
  sexes = ["f", "m"];

  constructor(
    private mainService: MainService, 
  ) { }

  ngOnInit() {
  }

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
    this.users = [];
  }

}
