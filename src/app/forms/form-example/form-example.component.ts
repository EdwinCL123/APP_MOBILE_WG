import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-example',
  standalone: true,
  templateUrl: './form-example.component.html',
  imports: [CommonModule, FormsModule, IonicModule], // Agregar IonicModule aquí
  styleUrls: ['./form-example.component.scss'],
})
export class FormExampleComponent implements OnInit {
  nombre: string = '';
  email: string = '';


  constructor() {}

  ngOnInit() {}

  submitForm() {
// Aquí puedes manejar la lógica para enviar el formulario
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
  }
}
