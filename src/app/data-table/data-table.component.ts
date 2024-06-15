import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApirestService } from '../api.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class DataTableComponent implements OnInit {
  @ViewChild('createModal') createModal!: TemplateRef<any>;

  productos: any[] = [];
  createProductForm: FormGroup;
  isModalOpen = false;

  constructor(
    public apirestservice: ApirestService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.createProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.apirestservice.getProductos().subscribe(
      (responseP: any) => {
        this.productos = responseP;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  showModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  onSubmit() {
    if (this.createProductForm.valid) {
      const newProduct = this.createProductForm.value;
      this.apirestservice.createProducto(newProduct).subscribe(
        (createdProduct) => {
          this.productos.push(createdProduct);
          this.closeModal();
          this.createProductForm.reset();
        },
        (error) => {
          console.error('Error al crear producto:', error);
        }
      );
    }
  }
}
