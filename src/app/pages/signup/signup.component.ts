import { LoginService } from '../../services/login.service';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService // ✅ Toastr corretamente injetado
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService
      .login(this.signupForm.value.email, this.signupForm.value.password)
      .subscribe({
        next: () => this.toastr.success('Login feito com sucesso!', 'Sucesso'), // ✅ Agora está correto
        error: () => this.toastr.error('Erro ao fazer login', 'Erro'), // ✅ Agora está correto
      });
  }

  navigate() {
    this.router.navigate(['/login']);
  }
}
