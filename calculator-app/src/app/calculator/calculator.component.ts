import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  screen: string = '';

  constructor(private service: CalculatorService) {}

  clickButton(value: string) {
    this.screen = this.service.addValue(value);
  }

  clear() {
    this.screen = this.service.clearAll();
  }

  delete() {
    this.screen = this.service.removeLast();
  }

  equal() {
    this.screen = this.service.getResult();
  }
}
