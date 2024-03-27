import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'user-profile-form',
  standalone: true,
  imports: [MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatSelect,
    MatLabel,
    MatOption,
    MatNativeDateModule,
    MatDatepickerToggle,
    MatDatepickerModule,
    ReactiveFormsModule],
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss'
})
export class UserProfileFormComponent {

  fb = inject(FormBuilder);

  foodForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    food: ['', Validators.required],
    date: ['', Validators.required],
  })


}
