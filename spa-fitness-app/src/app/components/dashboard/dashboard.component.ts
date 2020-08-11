import { Component, OnInit } from '@angular/core';
//FIREBASE
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from '@angular/fire/auth';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

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
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password1.value)
      .then((userCredential) => {
        console.log('registro');
      });
  }
});
