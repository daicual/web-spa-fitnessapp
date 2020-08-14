import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/form-helper';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formRegistro: FormGroup;
  formInicio: FormGroup;
  inicio: boolean = true;
  constructor(
    private _builder: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {
    this.formRegistro = this._builder.group(
      {
        email: [
          '',
          Validators.compose([Validators.email, Validators.required]),
        ],
        password1: ['', Validators.required],
        password2: ['', Validators.required],
      },
      {
        validator: MustMatch('password1', 'password2'),
      }
    );
    this.formInicio = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async registrarEmailPassword(values) {
    try {
      this.authSvc.registro(values.email, values.password1);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
  async inicioEmailPassword(values) {
    try {
      this.authSvc.inicio(values.email, values.password);
      this.router.navigate(['/user']);
    } catch (error) {
      console.log(error);
    }
  }
  swapInicioRegistro() {
    this.inicio = !this.inicio;
  }
}
