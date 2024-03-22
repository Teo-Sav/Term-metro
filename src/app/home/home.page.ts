import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  temperature: number = 0;

  getWidth(): number {
    const percentage = (this.temperature + 50) / 100;
    return percentage * 100;
  }

}
