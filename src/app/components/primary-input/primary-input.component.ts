import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
type InputTypes = 'text' | 'password' | 'email';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss',
})
export class PrimaryInputComponent {
  @Input() type: InputTypes = 'text';
  @Input() formControlName: any;
  @Input() placeholder: string = '';
}
