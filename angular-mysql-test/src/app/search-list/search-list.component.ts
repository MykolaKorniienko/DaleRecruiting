import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  searches: Object;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getSearches();
  }

  getSearches() {
    this.mainService.getSearches().subscribe(
      searches => this.searches = searches
    )
  }

}
