import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  data: string = '';

  addValue(val: string) {
    this.data = this.data + val;
    return this.data;
  }

  clearAll() {
    this.data = '';
    return this.data;
  }

  removeLast() {
    this.data = this.data.slice(0, -1);
    return this.data;
  }

  getResult() {
    try {
      this.data = eval(this.data).toString();
    } catch {
      this.data = 'Error';
    }
    return this.data;
  }
}
