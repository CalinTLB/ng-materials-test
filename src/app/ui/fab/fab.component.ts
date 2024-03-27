import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
 
@Component({
  selector: 'app-fab',
  standalone: true,
  imports: [MatButtonModule, MatSlideToggle],
  templateUrl: './fab.component.html',
  styleUrl: './fab.component.scss'
})
export class FabComponent {

}
