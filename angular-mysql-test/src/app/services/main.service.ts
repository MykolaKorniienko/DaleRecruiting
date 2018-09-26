import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SearchFilter} from "../models/searchFilter";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private userUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.userUrl);
  }

  getUser(id) {
    return this.http.get(`${this.userUrl}/${id}`);
  }

  addUser(user) {
    return this.http.post(this.userUrl, user, httpOptions);
  }

  deleteUser(id) {
    return this.http.delete(`${this.userUrl}/${id}`, httpOptions);
  }

  updateUser(user) {
    return this.http.put(this.userUrl, user, httpOptions);
  }

  searchUser(search) {
    return this.http.post('http://localhost:8080/api/search', search, httpOptions);
  }

  getSearches(): Observable<SearchFilter[]> {
    return this.http.get<SearchFilter[]>('http://localhost:8080/api/search', httpOptions);
  }
}
