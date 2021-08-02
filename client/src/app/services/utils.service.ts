import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getAllUsers(url: string) {
    return this.http.get<any[]>(url);
  }

  getUser(url: string, id: string) {
    return this.http.get<any>(url + "/" + id);
  }

  addUser(url: string, obj: any) {
    return this.http.post(url, obj);
  }

  updateUser(url: string, id: string, obj: any) {
    return this.http.put(url + "/" + id, obj);
  }

  deleteUser(url: string, id: string) {
    return this.http.delete(url + "/" + id);
  }
}
