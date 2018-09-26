import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MainService} from '../../services/main.service';
import {SearchFilter} from "../../models/searchFilter";
import {SearchFilterTransferService} from "../../services/search-filter-transfer.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListComponent implements OnInit {
  searchFilters: SearchFilter[];
  cols: any[];

  constructor(
    private mainService: MainService,
    private searchFilterTransfer: SearchFilterTransferService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getSearches();


    this.cols = [
      {field: 'id', header: '#'},
      {field: 'cliente', header: 'cliente'},
      {field: 'titolo', header: 'titolo'},
      {field: 'descrizione', header: 'descrizione'},
      {field: 'data', header: 'data'}
    ];
  }

  getSearches() {
    this.mainService.getSearches().subscribe(
      searchFilter => this.searchFilters = searchFilter)
  }

  onRowSelect(event) {

    this.searchFilterTransfer.setSearchFilter(event.data)
    this.router.navigate(['search']);
    console.dir(event.data);
  }
}
