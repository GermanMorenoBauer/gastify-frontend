import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  dateOfBirth: string = '';
  acceptTerms: boolean = false;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    // Aquí irá la lógica de registro
    console.log('Register attempt:', {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      dateOfBirth: this.dateOfBirth,
      acceptTerms: this.acceptTerms
    });
  }
} 