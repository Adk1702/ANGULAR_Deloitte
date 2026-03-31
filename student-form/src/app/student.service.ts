import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // post
  createStudent(data: any) {
    return this.http.post(this.url, data);
  }

  // get
  getData() {
    return this.http.get(this.url);
  }

  // put
  updateData(id: number, data: any) {
    return this.http.put(this.url + '/' + id, data);
  }

  // patch
  patchData(id: number, data: any) {
    return this.http.patch(this.url + '/' + id, data);
  }
}