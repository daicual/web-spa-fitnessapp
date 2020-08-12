import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
//FIREBASE
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/form-helper';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  formRegistro: FormGroup;
  formInicio: FormGroup;
  formBotones: FormGroup;
  constructor(private _builder: FormBuilder, private authSvc: AuthService) {
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
    this.formBotones = this._builder.group({});
  }

  registrarEmailPassword(values) {
    this.authSvc.registro(values.email, values.password1);
  }
  inicioEmailPassword(values) {
    this.authSvc.inicio(values.email, values.password);
    console.log(values);
  }
  ngOnInit(): void {}
}

/**
const formRegistro = document.getElementById('formRegistro');
formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = <HTMLInputElement>document.getElementById('registroEmail');
  const password1 = <HTMLInputElement>(
    document.getElementById('registroPassword1')
  );
  const password2 = <HTMLInputElement>(
    document.getElementById('registroPassword2')
  );
  var registroValido = true;
  if (password1.value != password2.value) {
    registroValido = false;
  }

  //Si los datos del registro son válidos, llamamos al servidor para completarlo
  if (registroValido) {
    this.afAuth
      .auth()
      .createUserWithEmailAndPassword(email.value, password1.value)
      .then((userCredential) => {
        console.log('registro');
      });
  }
});
*/
