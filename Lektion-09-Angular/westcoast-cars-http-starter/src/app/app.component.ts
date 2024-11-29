import { Component } from '@angular/core';
import { VehiclesComponent } from './vehicles/vehicles.component';

@Component({
  selector: 'app-root',
  imports: [VehiclesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Westcoast Cars';
}
