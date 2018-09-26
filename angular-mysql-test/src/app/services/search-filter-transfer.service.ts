import { Injectable } from '@angular/core';
import { SearchFilter } from "../models/searchFilter";

@Injectable({
  providedIn: 'root'
})
export class SearchFilterTransferService {

  constructor() {}

  searchFilter: SearchFilter= null;


  public getSearchFilter(): SearchFilter
  {
    let searchFilter = this.searchFilter;
    this.searchFilter = null;

    return searchFilter;
  }

  public setSearchFilter(searchFilter: SearchFilter)
  {
    this.searchFilter = searchFilter;
  }
}
